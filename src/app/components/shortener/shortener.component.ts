import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Link } from 'src/app/interfaces/link';
import { ShortenService } from 'src/app/services/shorten-service/shorten.service';

@Component({
  selector: 'app-shortener',
  templateUrl: './shortener.component.html',
  styleUrls: ['./shortener.component.css'],
})
export class ShortenerComponent {
  shortenedLinks: Link[] = [];

  form: FormGroup = new FormGroup({
    link: new FormControl('', [Validators.required]),
  });

  get link() {
    return this.form.get('link');
  }

  constructor(private shortenService: ShortenService) {}

  onSubmit(): void {
    // Shortcode api no longer exists
    // this.shortenService.shorten(this.link?.value).subscribe({
    //   next: (val: Link) => {
    //     this.shortenedLinks.push(val);
    //   },
    //   complete: () => {
    //     console.log('Request completed');
    //   },
    //   error: (err) => {
    //     console.error(err);
    //   },
    // });
  }

  copyLink(link: string, index: number): void {
    navigator.clipboard.writeText(link);
    const button = document.querySelector<HTMLElement>(
      `#btnId${index}`
    ) as HTMLElement;
    button.setAttribute('copied', 'true');
    button.innerHTML = 'Copied';
  }
}
