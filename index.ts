//Mike is from New Delhi and likes to eat pasta. 

import { forkJoin } from "rxjs";
import { ajax } from "rxjs/ajax";

const randomName$ = ajax
('https://random-data-api.com/api/name/random_name');

const randomNation$ = ajax
('https://random-data-api.com/api/nation/random_nation');

const randomFood$ = ajax
('https://random-data-api.com/api/food/random_food');

// randomName$.subscribe(ajaxResponse => console.log(ajaxResponse.response.first_name));
// randomNation$.subscribe(ajaxResponse => console.log(ajaxResponse.response.capital));
// randomFood$.subscribe(ajaxResponse => console.log(ajaxResponse.response.dish));

forkJoin([randomName$, randomNation$, randomFood$]).subscribe(
  (ajaxRepsonses) => console.log(ajaxRepsonses)
);