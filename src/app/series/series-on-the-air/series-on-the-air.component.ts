import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Serie} from "../serie.model";
import {SerieService} from "../serie.service";
import {PagerService} from "../../pager/pager.service";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'app-series-on-the-air',
    templateUrl: '../series-list-layout.html'
})
export class SeriesOnTheAirComponent {
    private series: Serie[] = [];

    constructor(private serieService: SerieService, private pagerService: PagerService, private route: ActivatedRoute) {
        this.route.params.subscribe(param => {
            if (param['page'] && param['page'] >= 1) {
                this.pagerService.page = param['page'];
                this.onTheAir();
            } else {
                this.pagerService.page = 1;
                this.onTheAir();
            }
        })
    }

    onTheAir() {
        this.series = [];
        this.serieService.getOnTheAir()
            .catch(err => {
                return Observable.empty();
            })
            .subscribe((serie: Serie) => this.series.push(this.serieService.serieFactory(serie)));
    }
}