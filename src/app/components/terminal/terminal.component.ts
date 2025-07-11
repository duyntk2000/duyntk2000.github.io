import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-terminal',
  standalone: false,
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})
export class TerminalComponent implements AfterViewInit {
  log: string[] = ['Welcome to Khanh Duy\'s Portfolio Terminal!', 'Type `help` to get started.'];
  currentCommand: string = '';
  history: string[] = [];
  historyPos: number = 0;

  @ViewChild('commandInput') commandInput!: ElementRef;

  ngAfterViewInit() {
    this.focusInput();
  }

  focusInput() {
    this.commandInput.nativeElement.focus();
  }

  scrollCommand(event: KeyboardEvent) {
    if (event.key == 'ArrowUp') {
      if (this.historyPos != 0) this.historyPos -= 1;
      event.preventDefault();
      this.currentCommand = (this.historyPos != this.history.length) ? this.history[this.historyPos] : '';
    } else if (event.key == 'ArrowDown') {
      if (this.historyPos != this.history.length) this.historyPos += 1;
      event.preventDefault();
      this.currentCommand = (this.historyPos != this.history.length) ? this.history[this.historyPos] : '';
    }
    console.log(this.historyPos)
  }

  executeCommand() {
    const cmd = this.currentCommand.trim().toLowerCase();
    this.log.push(`$${this.currentCommand}`);
    this.history.push(this.currentCommand);
    this.historyPos += 1;
    this.currentCommand = '';

    switch (cmd) {
      case 'help':
        this.log.push('Available commands: clear, cv, whoami');
        break;
      case 'cv':
        window.open("pdf/CV_Cyber.pdf", '_blank');
        break;
      case 'clear':
        this.log = [];
        break;
      case 'whoami':
        this.log.push('Hi, I am Khanh Duy Nguyen Tu, a Cybersecurity Enthusiast with a side of Web Developper');
        break;
      default:
        this.log.push('Unknown command. Type `help`.');
    }

    // Scroll both terminal and log to bottom
    setTimeout(() => {
      const terminalLog = document.querySelector('.terminal-log');
      if (terminalLog) terminalLog.scrollTop = terminalLog.scrollHeight;
    });
  }
}
