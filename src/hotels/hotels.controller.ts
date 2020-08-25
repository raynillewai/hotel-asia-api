import { Controller, Get, Post, Put, Delete, Body, Param, Query, NotFoundException, HttpStatus } from '@nestjs/common';
import { HotelsService } from './hotels.service';
import Hotels from './entity/hotels.entity';
import CreateHotelPackageDto from './dto/hotels.dto';
import { Res, Req } from '@nestjs/common';
import { Response } from 'express';
import { PaginationDto } from "./dto/pagination.dto";
import { PaginatedProductsResultDto } from './dto/paginated-products-result.dto';


@Controller('hotels')
export class HotelsController {
    constructor(private hotelsService: HotelsService) {}

    // @Get('list')
    // findAll(@Query() paginationDto: PaginationDto): Promise<PaginatedProductsResultDto> {
    //   paginationDto.page = Number(paginationDto.page)
    //   paginationDto.limit = Number(paginationDto.limit)
  
    //   return this.hotelsService.findAll({
    //     ...paginationDto,
    //     limit: paginationDto.limit > 10 ? 10 : paginationDto.limit
    //   })
    // }

    @Get()
    getHotels() {
      // return res.status(205).json(this.hotelsService.getHotelPackages());
      return this.hotelsService.getHotelPackages();
    }

    @Get(':id/')
    async getHotel(@Param('id') id) {
        // const h = await this.hotelsService.getHotel(id);
        // if (!h) throw new NotFoundException('Hotel Package does not exist!');
        return await this.hotelsService.getHotel(id);
    }

    @Post('create')
    async create(@Body() hotelData: CreateHotelPackageDto): Promise<Hotels> {
      return this.hotelsService.create(hotelData);
    }

    @Put(':id/update')
    async update(@Param('id') id, @Body() hotelData: CreateHotelPackageDto): Promise<any> {
      hotelData.id = id;
      return this.hotelsService.update(hotelData);
    }
    
    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
      return this.hotelsService.delete(id);
    }
}
