import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-calls',
  templateUrl: './calls.component.html',
  styleUrls: ['./calls.component.scss']
})
export class CallsComponent {
  id: string | null | undefined;


  constructor(private route: ActivatedRoute) {}

  
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
  }


}
