import { Component, signal} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  standalone: false,
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  showScrollTop = false;

  ngOnInit() {
    window.addEventListener('scroll', this.onScroll.bind(this));
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.onScroll.bind(this));
  }

  onScroll() {
    this.showScrollTop = window.scrollY > 300;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');
  }
  readonly panelOpenState = signal(false);
  switchLanguage(lang: string) {
    if (lang === '') {
      lang = (this.translate.currentLang === 'en') ? 'fr' : 'en';
    }
    this.translate.use(lang);
  }
  
  inputText: string = '';
  outputText: string = '';
  navOpen = false;
  thm_roadmap = {
    "left" : [
      {"name" : "SOC Level 1" , "value" : 100},
      {"name" : "SOC Level 2" , "value" : 0},
      {"name" : "Advanced Endpoint Investigation" , "value" : 3},
      {"name" : "Defending Azure" , "value" : 0},
    ],
    "center" : [
      {"name" : "Jr Penetration Tester" , "value" : 100},
      {"name" : "Web Fundamentals" , "value" : 100},
      {"name" : "Web Application Pentesting" , "value" : 58},
      {"name" : "Red Teaming" , "value" : 2},
    ],
    "right" : [
      {"name" : "Security Engineer" , "value" : 12},
      {"name" : "DevSecOps" , "value" : 0},
      {"name" : "Attacking and Defending AWS" , "value" : 0},
    ]
  };
  rootme_stats = {
    "general" : [
      {"name" : "Position", "value" : 3073},
      {"name" : "Points", "value" : 3185},
      {"name" : "Challenges", "value" : 163},
    ],
    "details" : [
      {"name" : "App - Script", "points" : 235, "done" : "13 / 33", "value" : 39},
      {"name" : "App - System", "points" : 320, "done" : "14 / 93", "value" : 15},
      {"name" : "Cracking", "points" : 105, "done" : "10 / 70", "value" : 14},
      {"name" : "Cryptanalysis", "points" : 795, "done" : "40 / 75", "value" : 53},
      {"name" : "Forensic", "points" : 5, "done" : "1 / 44", "value" : 2},
      {"name" : "Programming", "points" : 250, "done" : "11 / 29", "value" : 38},
      {"name" : "Realist", "points" : 10, "done" : "1 / 60", "value" : 2},
      {"name" : "Network", "points" : 160, "done" : "13 / 35", "value" : 37},
      {"name" : "Web - Client", "points" : 770, "done" : "25 / 42", "value" : 60},
      {"name" : "Web - Server", "points" : 440, "done" : "27 / 97", "value" : 28},
      {"name" : "Steganography", "points" : 95, "done" : "8 / 24", "value" : 33},
    ]
  };
  htb_stats = {
    "general" : [
      {"name" : "Global Ranking", "value" : 926},
      {"name" : "User Owns", "value" : 25},
      {"name" : "System Owns", "value" : 23},
    ],
  };
  cryptohack_stats = {
    "general" : [
      {"name" : "Rank", "value" : 3698},
      {"name" : "Points", "value" : 2000},
    ],
  };
}

