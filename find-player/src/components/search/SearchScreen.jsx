import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import * as axios from 'axios';
import { useForm } from '../../hooks/useForm';
import { SearchList } from './SearchList';

const baseURLPick = 'http://127.0.0.1:4000/nba/typeStature';


export const SearchScreen = () => {

  const [Stature, setStature] = useState(null);
  const [BodyQuery, setBodyQuery] = useState({})

  const [formValue, handleInputChange] = useForm({
    typeMeasurement: { value: '0', label: 'inch' },
    value: ''
  });

  const { value, typeMeasurement } = formValue;

  useEffect(() => {
    axios.get(baseURLPick).then((response) => {
      setStature(response.data);
      console.log('Height type picker from backend...');
    });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    setBodyQuery({
      typeMeasurement: parseInt(typeMeasurement.value), 
      value
    })
  }

  return (
    <>
      <h1>NBA Player by height</h1>
      <hr />
      <div className="row p-5">
        <div className="col-5">
          <h4>Search</h4>
          <hr />

          {
            !Stature ?
              (<h4>Loading ...</h4>)
              :
              (<form onSubmit={handleSearch}>


                <div className="h-25 d-inline-block">
                  <Select
                    value={typeMeasurement}
                    onChange={(e) => handleInputChange(e, 'typeMeasurement')}
                    options={Stature}
                    name='typeMeasurement'
                  />
                </div>
                <input
                  type='text'
                  placeholder='Find height...'
                  name='value'
                  autoComplete='off'
                  className='w-50 h-25 d-inline-block m-3'
                  value={value}
                  onChange={handleInputChange}
                />
                <br />

                <button
                  type='submit'
                  className='btn btn-outline-primary w-100'
                >
                  Search</button>
              </form>)
          }


        </div>

        <div className="col-5">
          {
            (Object.keys(BodyQuery).length) > 0 && (
              <SearchList querySearch={BodyQuery} />
            )
          }
        </div>
      </div>
    </>
  )
}
