import Hotels from "../entity/hotels.entity";

export class PaginatedProductsResultDto {
  data: Hotels[];
  page: number;
  limit: number;
  totalCount: number;
}