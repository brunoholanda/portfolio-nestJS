import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lead } from './lead.entity';
import { LeadsService } from './leads.service';
import { LeadsController } from './leads.controller';
import { PdfController } from '../PdfController/pdf.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Lead])],
  providers: [LeadsService],
  controllers: [LeadsController, PdfController],
})
export class LeadsModule {}
