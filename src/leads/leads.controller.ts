import { Controller, Get, Post, Body } from '@nestjs/common';
import { LeadsService } from './leads.service';
import { Lead } from './lead.entity';
import { CreateLeadDto } from 'src/dto/create-lead.dto';

@Controller('leads')
export class LeadsController {
  constructor(private readonly leadsService: LeadsService) {}

  @Post()
  create(@Body() createLeadDto: CreateLeadDto): Promise<Lead> {
    return this.leadsService.create(createLeadDto);
  }

  @Get()
  findAll(): Promise<Lead[]> {
    return this.leadsService.findAll();
  }
}
