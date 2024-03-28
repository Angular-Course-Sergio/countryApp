import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

type Region = 'Africa' | 'America' | 'Asia' | 'Europe' | 'Oceania';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
})
export class ByRegionPageComponent {
  public countries: Country[] = [];
  public isLoading = false;
  public regions: Region[] = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion?: Region;

  constructor(private countriesService: CountriesService) {}

  seachByRegion(term: Region): void {
    this.selectedRegion = term;

    this.isLoading = true;
    this.countriesService.searchRegion(term).subscribe((countries) => {
      this.countries = countries;
      this.isLoading = false;
    });
  }
}
