import { Body, Controller, Post, Get } from '@nestjs/common';
import { PlayerHeightQuery } from './dto/playerHeightQuery';
import { ExternalNbaService } from './external-nba.service';
import { PlayerNba } from './interfaces/playerNba.interface';

@Controller('nba')
export class ExternalNbaController {

    constructor(private externalNbaService: ExternalNbaService) { }

    @Post('/query')
    async queryHeight(@Body() playerHeightQuery: PlayerHeightQuery) : Promise<PlayerNba[]>{
        return this.externalNbaService.findHeight(playerHeightQuery);
    }

    @Get('/typeStature')
    stature(){
        return this.externalNbaService.stature();
    }

}
