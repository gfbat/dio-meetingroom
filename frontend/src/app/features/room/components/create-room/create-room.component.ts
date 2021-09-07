import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Room } from '../../model/room';
import { RoomService } from '../../services/room.service';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.scss']
})
export class CreateRoomComponent implements OnInit {
  room: Room = new Room();
  submitted = false;

  constructor(private roomService: RoomService, private router: Router) { }

  ngOnInit() {
  }

  newRoom(): void{
    this.submitted = false;
    this.room = new Room();
  }

  save(){
    this.roomService.createRoom(this.room).subscribe((data: any) => console.log(data),
      (error: any) => console.log(error));

    this.room = new Room();
    this.goToList();
  }

  onSubmit(){
    this.submitted = true;
    this.save();
  }

  goToList(){
    this.router.navigate(['/rooms'])
  }
}
