import { PartialType, OmitType } from "@nestjs/swagger";
import { CreateProductDto } from "./create-product.dto";

export class EditProductDto extends PartialType(
    OmitType(CreateProductDto, ['description','category'] as const)
) {}