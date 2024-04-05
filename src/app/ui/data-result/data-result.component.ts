import { Component, Input, OnInit } from '@angular/core';
import { DataApd } from '../../apd/shared/models/data-apd.model';
import { DataTypesService } from '../../apd/shared/data-types.service';

@Component({
  selector: 'app-data-result',
  standalone: true,
  imports: [],
  templateUrl: './data-result.component.html',
  styleUrl: './data-result.component.css'
})
export class DataResultComponent implements OnInit {
  dataResult: DataApd | undefined;
  @Input() type!: string;
  name: string = '';
  icon: string = '';
  value: number | string = 0;
  unit: string | undefined = '';

  constructor(private dataType:DataTypesService) {}

  ngOnInit(): void {
    console.log(this.type);

    this.dataResult = this.dataType.getTypes(this.type);
    if (this.dataResult) {
      this.name = this.dataResult.getName();
      this.icon = this.dataResult.getIcon();
      this.value = this.dataResult.getValue();
      this.unit = this.dataResult.getUnit();
    }
  }
}
