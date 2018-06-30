import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'worldsPipe'
})
export class WorldsPipe implements PipeTransform {

  transform(worlds: any, filterVal: string): any {
    console.log('Worlds Pipe', worlds, filterVal);
    /*
      Pipe to filter worlds by name or genre
    */
    const findFilterInInfo = (world) => {
      /*
        + Check world.info to see if any of Developer, Publisher, Release Date, or Genre
          contains filterVal
      */
     /*
      world.info:
        {label: 'Developer', text: 'Capcom'},
        {label: 'Publisher', text: 'Capcom'},
        {label: 'Release Date', text: 'Jan 24, 2017'},
        {label: 'Genre', data: ['Survival Horror', 'Action']}
      */
      for (const info of world.info) {
        console.log('Info' , info);
        let matchFilter = false;
        switch (info.label) {
          case 'Genre': {
            const genres: string[] = info.data;
            for (let i = 0; i < genres.length && matchFilter === false; i++) {
              const genre = genres[i];
              matchFilter = this.matchFilter(genre, filterVal);
            }
            break;
          }
          default: {
            matchFilter = this.matchFilter(info.text, filterVal);
            break;
          }
        }
        if (matchFilter) {
          return true;
        }
      }
      return false;
    };
   return worlds.filter(world => {
      /*
        + True when:
          Title contains filterVal
          Developer contains filterVal
          Publisher contains filterVal
          Release Date contains filterVal
          Genre contains filterVal
      */
      return(
        this.matchFilter(world.title, filterVal) ||  findFilterInInfo(world)
      );
    });
  }
  matchFilter(str, filterVal) {
    console.log('Match Filter', str, filterVal);
    const len = filterVal.length;
    const matchStr = str.substring(0, len);
    console.log('Match String', matchStr);
    console.log('Result', matchStr.toLowerCase().includes(filterVal.toLowerCase()));
    return matchStr.toLowerCase().includes(filterVal.toLowerCase());
  }
}
