import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import {
  PartialUpdateProductDto,
  UpdateProductDto,
} from './dto/update-product.dto';
import { Products } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products)
    private productsRepo: Repository<Products>,
  ) {}

  async create(dto: CreateProductDto) {
    const product = this.productsRepo.create(dto);
    await this.productsRepo.save(product);

    return { message: 'Product created', data: product };
  }

  async findAll() {
    const products = await this.productsRepo.find({
      order: { createdAt: 'DESC' },
    });

    return {
      message: 'All products fetched',
      count: products.length,
      data: products,
    };
  }

  async findOne(id: number) {
    const product = await this.productsRepo.findOne({ where: { id } });

    if (!product)
      throw new NotFoundException(`Product with id ${id} not found`);

    return { message: 'Product fetched', data: product };
  }

  async update(id: number, dto: PartialUpdateProductDto) {
    await this.findOne(id);

    await this.productsRepo.update(id, dto);
    const updated = await this.productsRepo.findOne({ where: { id } });

    return { message: 'Product updated', data: updated };
  }

  async replace(id: number, dto: UpdateProductDto) {
    const product = await this.findOne(id);

    const updated = { ...product.data, ...dto, id };
    await this.productsRepo.save(updated);

    return { message: 'Product replaced', data: updated };
  }

  async remove(id: number) {
    const product = await this.findOne(id);

    await this.productsRepo.delete(id);

    return { message: 'Product deleted', id: product.data.id };
  }

  async findByCategory(category: string) {
    const products = await this.productsRepo.find({
      where: { category },
    });

    return {
      message: `Products in category ${category}`,
      count: products.length,
      data: products,
    };
  }

  async search(keyword: string) {
    const products = await this.productsRepo.find({
      where: { name: ILike(`%${keyword}%`) },
    });

    return {
      message: `Search results for ${keyword}`,
      count: products.length,
      data: products,
    };
  }

  async toggleActive(id: number) {
    const product = await this.productsRepo.findOne({ where: { id } });

    if (!product)
      throw new NotFoundException(`Product with id ${id} not found`);

    product.isActive = !product.isActive;
    await this.productsRepo.save(product);

    return { message: 'Product status toggled', data: product };
  }
}
