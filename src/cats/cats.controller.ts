import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) { }

  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }

  @Get()
  findAll() {
    return this.catsService.findAll();
  }

  @Get(':name')
  findOne(@Param('name') name: string) {
    return this.catsService.findOne(name);
  }

  @Put(':name')
  update(@Param('name') name: string, @Body() updateCatDto: UpdateCatDto) {
    return this.catsService.update(name, updateCatDto);
  }

  @Delete(':name')
  remove(@Param('name') name: string) {
    return this.catsService.remove(name);
  }
}
