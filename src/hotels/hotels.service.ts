import { Injectable } from '@nestjs/common';
import CreateHotelPackageDto from './dto/hotels.dto';
import Hotels from './entity/hotels.entity';
import { getConnection } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Logger } from '@nestjs/common';
import { UpdateResult, DeleteResult } from  'typeorm';
import { PaginationDto } from './dto/pagination.dto';
import { PaginatedProductsResultDto } from './dto/paginated-products-result.dto';


@Injectable()
export class HotelsService {
  constructor(
    @InjectRepository(Hotels)
    private readonly hotelsRepository: Repository<Hotels>
  ) {}

  async create(hotelDto: CreateHotelPackageDto): Promise<Hotels> {
    return await this.hotelsRepository.save(hotelDto)
  }

  async getHotelPackages(): Promise<Hotels[]> {
    return await this.hotelsRepository.find();
  }

  async getHotel(hotelId: string): Promise<Hotels> {
    const h = await this.hotelsRepository.findOne(
      { where:
          { id: hotelId }
      });
    return h;
  }

  // async findAll(paginationDto: PaginationDto): Promise<PaginatedProductsResultDto> {
  //   const skippedItems = (paginationDto.page - 1) * paginationDto.limit;

  //   const totalCount = await this.hotelsRepository.count()
  //   const hotels = await this.hotelsRepository.createQueryBuilder()
  //     .orderBy('createdAt', "DESC")
  //     .offset(skippedItems)
  //     .limit(paginationDto.limit)
  //     .getMany()

  //   return {
  //     totalCount,
  //     page: paginationDto.page,
  //     limit: paginationDto.limit,
  //     data: hotels,
  //   }
  // }

  async update(hotelDto: CreateHotelPackageDto): Promise<UpdateResult> {
    return await this.hotelsRepository.update(hotelDto.id, hotelDto);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.hotelsRepository.delete(id);
  }

}
