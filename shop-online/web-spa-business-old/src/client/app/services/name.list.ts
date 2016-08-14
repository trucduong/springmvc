import { Injectable } from 'angular2/core';

@Injectable()
export class NameList {

  constructor() { }
  names = ['Dijkstra', 'Knuth', 'Turing', 'Hopper'];

  get(): string[] {
    return this.names;
  }
  add(value: string): void {
    this.names.push(value);
  }
}

