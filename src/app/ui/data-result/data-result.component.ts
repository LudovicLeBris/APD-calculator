import { Component, Input, OnInit } from '@angular/core';
import { DataApd } from '../../apd/shared/models/data-apd.model';
import { DataTypesService } from '../../apd/shared/data-types.service';
import { Singularity } from '../../apd/shared/models/singularity.model';

@Component({
  selector: 'app-data-result',
  standalone: true,
  imports: [],
  templateUrl: './data-result.component.html',
  styleUrl: './data-result.component.css'
})
export class DataResultComponent implements OnInit {
  @Input() data: DataApd | Singularity | undefined;
  name: string = '';
  icon: string = '';
  value: number | string | undefined;
  unit: string | undefined = '';

  ngOnInit(): void {
    if (this.data) {
      this.name = this.data.getName();
      this.icon = this.data.getIcon();
    }
    if (this.data instanceof(DataApd)) {
      this.unit = this.data.getUnit();
      this.value = this.data.getValue();
    } else if (this.data instanceof(Singularity)) {
      this.value = this.data.getQuantity();
    }
  }
}
