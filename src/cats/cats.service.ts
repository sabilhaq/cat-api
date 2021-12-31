import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cat, CatDocument } from 'src/schemas/cat.schema';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Injectable()
export class CatsService {
  constructor(@InjectModel(Cat.name) private catModel: Model<CatDocument>) { }

  async create(createCatDto: CreateCatDto): Promise<Cat> {
    return new this.catModel(createCatDto).save();
  }

  async findAll() {
    return this.catModel.find();
  }

  async findOne(name: string) {
    return this.catModel.findOne({ name });
  }

  async update(name: string, updateCatDto: UpdateCatDto) {
    return this.catModel.updateOne({ name }, { $set: { ...updateCatDto } });
  }

  async remove(name: string) {
    return this.catModel.deleteOne({ name });
  }
}
