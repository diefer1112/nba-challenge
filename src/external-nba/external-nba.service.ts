import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { PlayerHeightQuery } from './dto/playerHeightQuery';
import { PlayerNba } from './interfaces/playerNba.interface';
import fetch from 'node-fetch';
import { typeStature } from 'src/helppers/typeStature';

@Injectable()
export class ExternalNbaService {

    constructor(private httpService: HttpService) { }


    async findHeight(query: PlayerHeightQuery): Promise<PlayerNba[]> {
        const { values }: { values: PlayerNba[] } = await (await fetch('https://mach-eight.uc.r.appspot.com/')).json();

        const newValues = values.filter(player => {

            switch (query.typeMeasurement) {
                case typeStature.inch:
                    return player.h_in === query.value;

                case typeStature.meter:
                    return player.h_meters.replace('.', '') === query.value;
                default:
                    return {}
            }

        });

        return newValues;
    }

    stature() {
        return {
            ...typeStature
        }
    }
}
