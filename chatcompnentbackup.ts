import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  screenHeight: number | undefined;
  screenWidth: number | undefined;
  connecting = false;
  modcol = 2;
  globalCols = 2;
  tiles: Tile[] = [{ text: 'One', cols: 1, rows: 2, color: 'lightblue' }];

  rowheight = 100 + 'px';
  constructor(public dialog: MatDialog) {
    this.getScreenSize();
    this.openDialog();
  }

  //screen size
  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    this.rowheight = (window.innerHeight - 5) / this.tiles.length + 'px';
    console.log(this.screenHeight, this.screenWidth);
  }
  openDialog() {
    this.dialog.open(RoomID);
  }
  addpp() {
    this.tiles.push({ text: 'Five', cols: 1, rows: 2, color: '#DDBDa1' });
    if (this.tiles.length % 2 != 0) {
      this.modcol = this.tiles.length + 1;
      this.modcol >= 5 ? (this.globalCols = 3) : (this.globalCols = 2);
    } else {
    }

    this.rowheight = (window.innerHeight - 5) / this.modcol + 'px';
  }

  ngOnInit(): void {}
}

@Component({
  selector: 'roomid',
  templateUrl: 'models/roomid.html',
  styleUrls: ['./chat.component.scss'],
})
export class RoomID {
  roomid = 'AbhguHuyjhvjFg';
  roomurl = 'https://' + 'vaicall.web.app/' + this.roomid;
  name = 'Akshai';

  constructor(private route: Router, private _snackBar: MatSnackBar) {}
  openSnackBar(msg: string) {
    this._snackBar.open(msg + ' Copied !', 'Okay', {
      duration: 1500,
    });
  }
}
