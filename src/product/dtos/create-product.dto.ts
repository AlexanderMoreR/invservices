import { IsString, IsEnum } from "class-validator";
import { EnumToString } from "src/helpers/enumToString";
import { ProductCategory } from "../enums";

export class CreateProductDto {

    @IsString({message: `Ingresa nombre de Producto`})
    name: String;
    @IsString()
    description: String;
    @IsEnum(ProductCategory, {message: `Opcion Invalida. Las opciones correctas son ${EnumToString(ProductCategory)}` })
    category: ProductCategory;
    @IsString({message: `Ingresa un Precio.`})
    price: String
}