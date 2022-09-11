import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateProductDto } from './dtos/create-product.dto';
import { EditProductDto } from './dtos/edit-product.dto';

@Controller('product')
export class ProductController {
  
  @Get()
  getMany() {return {message: 'Productos'}}

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id:number){return {message: 'Producto'}}

  @Post()
  createOne(
    @Body() dto: CreateProductDto
  ){return dto;}

  @Put(':id')
  editOne(
    @Param('id') id: string,
    @Body() dto: EditProductDto
  ){
    return dto;
  }

  @Delete(':id')
  deleteOne(){return {message: 'Borrar Producto'}}


}
