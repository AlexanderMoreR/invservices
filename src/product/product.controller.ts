import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateProductDto } from './dtos/create-product.dto';
import { EditProductDto } from './dtos/edit-product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {

  constructor (private readonly productService: ProductService) {}
  
  @Get()
  findAll() {return this.productService.findAll();}

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id:number){return {message: 'Producto'}}

  @Post()
  create(@Body() dto: CreateProductDto) {
    return this.productService.create();
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() dto: EditProductDto){
    return this.productService.update();
  }

  @Delete(':id')
  remove(@Param('id') id: string){return this.productService.remove(+id);}


}
