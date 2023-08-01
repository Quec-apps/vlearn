//Lesson1
k=0;t='a';

k++;
window[t+"-type"+k] = "image";
window[t+"-q"+k] = "വീട്"; window[t+"-m"+k] = "mal/level1/house.mp3"; //m is music
window[t+"-o1"+k] = "water"; window[t+"-l1-"+k] = "/level1/water.png";
window[t+"-o2"+k] = "tea"; window[t+"-l2-"+k] = "/level1/tea.png";
window[t+"-o3"+k] = "house"; window[t+"-l3-"+k] = "/level1/house.png";
window[t+"-o4"+k] = "car"; window[t+"-l4-"+k] = "/level1/car.png";
window[t+"-ans"+k] = 3;

k++;
window[t+"-type"+k] = "image";
window[t+"-q"+k] = "കാർ"; window[t+"-m"+k] = "mal/level1/car.mp3"; //m is music    
window[t+"-o1"+k] = "hot"; window[t+"-l1-"+k] = "/level1/hot.png";
window[t+"-o2"+k] = "house"; window[t+"-l2-"+k] = "/level1/house.png";
window[t+"-o3"+k] = "car"; window[t+"-l3-"+k] = "/level1/car.png";
window[t+"-o4"+k] = "cold"; window[t+"-l4-"+k] = "/level1/cold.png";
window[t+"-ans"+k] = 3;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "എൻ്റെ കാർ"; window[t+"-m"+k] = "mal/level1/my-car.mp3"; //m is music
window[t+"-l"+k] = 6; //how many options are there
window[t+"-o1"+k] = "car";
window[t+"-o2"+k] = "what";
window[t+"-o3"+k] = "her";
window[t+"-o4"+k] = "small";
window[t+"-o5"+k] = "my";
window[t+"-o6"+k] = "cold";
window[t+"-ans"+k] = [5,1];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "നിങ്ങളുടെ കാർ"; window[t+"-m"+k] = "mal/level1/your-car.mp3"; //m is music
window[t+"-l"+k] = 6; //how many options are there
window[t+"-o1"+k] = "big";
window[t+"-o2"+k] = "cold";
window[t+"-o3"+k] = "my";
window[t+"-o4"+k] = "your";
window[t+"-o5"+k] = "car";
window[t+"-o6"+k] = "tea";
window[t+"-ans"+k] = [4,5];

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "your"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "നിങ്ങളുടെ";
window[t+"-o2"+k] = "വലുത്";
window[t+"-o3"+k] = "കാർ";
window[t+"-o4"+k] = "ചായ";
window[t+"-ans"+k] = 1;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "എൻ്റെ വീട്"; window[t+"-m"+k] = "mal/level1/my-house.mp3"; //m is music
window[t+"-l"+k] = 6; //how many options are there
window[t+"-o1"+k] = "water";
window[t+"-o2"+k] = "your";
window[t+"-o3"+k] = "house";
window[t+"-o4"+k] = "hot";
window[t+"-o5"+k] = "my";
window[t+"-o6"+k] = "small";
window[t+"-ans"+k] = [5,3];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "എൻ്റെ കാർ വലുതാണ്"; window[t+"-m"+k] = "mal/level1/my-car-is-big.mp3"; //m is music
window[t+"-l"+k] = 8; //how many options are there
window[t+"-o1"+k] = "is";
window[t+"-o2"+k] = "big";
window[t+"-o3"+k] = "car";
window[t+"-o4"+k] = "my";
window[t+"-o5"+k] = "house";
window[t+"-o6"+k] = "her";
window[t+"-o7"+k] = "your";
window[t+"-o8"+k] = "cold";
window[t+"-ans"+k] = [4,3,2,1];

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "big"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "നിങ്ങളുടെ";
window[t+"-o2"+k] = "വലുത്";
window[t+"-o3"+k] = "ചെറുത്";
window[t+"-o4"+k] = "ആണ്";
window[t+"-ans"+k] = 2;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "എൻ്റെ കാർ ചെറുതാണ്"; window[t+"-m"+k] = "mal/level1/my-car-is-small.mp3"; //m is music
window[t+"-l"+k] = 8; //how many options are there
window[t+"-o1"+k] = "is";
window[t+"-o2"+k] = "big";
window[t+"-o3"+k] = "her";
window[t+"-o4"+k] = "my";
window[t+"-o5"+k] = "house";
window[t+"-o6"+k] = "car";
window[t+"-o7"+k] = "small";
window[t+"-o8"+k] = "cold";
window[t+"-ans"+k] = [4,6,7,1];

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "small"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "നിങ്ങളുടെ";
window[t+"-o2"+k] = "വലുത്";
window[t+"-o3"+k] = "ചെറുത്";
window[t+"-o4"+k] = "ആണ്";
window[t+"-ans"+k] = 3;

k++;
window[t+"-type"+k] = "match";
window[t+"-l"+k] = 4; //how many options are there
window[t+"-o-l-1"+k] = "car"; window[t+"-o-r-1"+k] = "കാർ";
window[t+"-o-l-2"+k] = "big"; window[t+"-o-r-2"+k] = "വലുത്";
window[t+"-o-l-3"+k] = "my"; window[t+"-o-r-3"+k] = "എൻ്റെ";
window[t+"-o-l-4"+k] = "is"; window[t+"-o-r-4"+k] = "ആണ്";
window[t+"-o-l-5"+k] = "your"; window[t+"-o-r-5"+k] = "നിങ്ങളുടെ";

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "is"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "വീട്";
window[t+"-o2"+k] = "ആണ്";
window[t+"-o3"+k] = "കാർ";
window[t+"-o4"+k] = "തണുപ്പ്";
window[t+"-ans"+k] = 2;

k++;
window[t+"-type"+k] = "match";
window[t+"-l"+k] = 5; //how many options are there
window[t+"-o-l-1"+k] = "small"; window[t+"-o-r-1"+k] = "ചെറുത്";
window[t+"-o-l-2"+k] = "is"; window[t+"-o-r-2"+k] = "ആണ്";
window[t+"-o-l-3"+k] = "car"; window[t+"-o-r-3"+k] = "കാർ";
window[t+"-o-l-4"+k] = "big"; window[t+"-o-r-4"+k] = "വലുത്";
window[t+"-o-l-5"+k] = "house"; window[t+"-o-r-5"+k] = "വീട്";

k++;
window[t+"-type"+k] = "voice-mcq";
window[t+"-q"+k] = "mal/level1/your-house-is-small.mp3"; //file name
window[t+"-l"+k] = 8; //how many options are there
window[t+"-o1"+k] = "ചെറുത്";
window[t+"-o2"+k] = "ആണ്";
window[t+"-o3"+k] = "വീട്";
window[t+"-o4"+k] = "അവൻ്റെ";
window[t+"-o5"+k] = "നിങ്ങളുടെ";
window[t+"-o6"+k] = "തണുപ്പ്";
window[t+"-o7"+k] = "കൂടാതെ";
window[t+"-o8"+k] = "എൻ്റെ";
window[t+"-ans"+k] = [5,3,1,2];

k++;
window[t+"-type"+k] = "match";
window[t+"-l"+k] = 5; //how many options are there
window[t+"-o-l-1"+k] = "car"; window[t+"-o-r-1"+k] = "കാർ";
window[t+"-o-l-2"+k] = "big"; window[t+"-o-r-2"+k] = "വലുത്";
window[t+"-o-l-3"+k] = "my"; window[t+"-o-r-3"+k] = "എൻ്റെ";
window[t+"-o-l-4"+k] = "your"; window[t+"-o-r-4"+k] = "നിങ്ങളുടെ";
window[t+"-o-l-5"+k] = "house"; window[t+"-o-r-5"+k] = "വീട്";



//Lesson2

lesson1Total = k;
k=0;t='b';

k++;
window[t+"-type"+k] = "image";
window[t+"-q"+k] = "വെള്ളം"; window[t+"-m"+k] = "mal/level1/water.mp3"; //m is music
window[t+"-o1"+k] = "tea"; window[t+"-l1-"+k] = "/level1/tea.png";
window[t+"-o2"+k] = "water"; window[t+"-l2-"+k] = "/level1/water.png";
window[t+"-o3"+k] = "cold"; window[t+"-l3-"+k] = "/level1/cold.png";
window[t+"-o4"+k] = "hot"; window[t+"-l4-"+k] = "/level1/hot.png";
window[t+"-ans"+k] = 2;

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "water"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "എൻ്റെ";
window[t+"-o2"+k] = "ചായ";
window[t+"-o3"+k] = "വെള്ളം";
window[t+"-o4"+k] = "തണുപ്പ്";
window[t+"-ans"+k] = 3;

k++;
window[t+"-type"+k] = "image";
window[t+"-q"+k] = "ചായ"; window[t+"-m"+k] = "mal/level1/tea.mp3"; //m is music
window[t+"-o1"+k] = "cold"; window[t+"-l1-"+k] = "/level1/cold.png";
window[t+"-o2"+k] = "tea"; window[t+"-l2-"+k] = "/level1/tea.png";
window[t+"-o3"+k] = "water"; window[t+"-l3-"+k] = "/level1/water.png";
window[t+"-o4"+k] = "hot"; window[t+"-l4-"+k] = "/level1/hot.png";
window[t+"-ans"+k] = 2;

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "tea"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "വലുത്";
window[t+"-o2"+k] = "ചായ";
window[t+"-o3"+k] = "വീട്";
window[t+"-o4"+k] = "തണുപ്പ്";
window[t+"-ans"+k] = 2;

k++;
window[t+"-type"+k] = "image";
window[t+"-q"+k] = "തണുപ്പ്"; window[t+"-m"+k] = "mal/level1/cold.mp3"; //m is music
window[t+"-o1"+k] = "tea"; window[t+"-l1-"+k] = "/level1/tea.png";
window[t+"-o2"+k] = "hot"; window[t+"-l2-"+k] = "/level1/hot.png";
window[t+"-o3"+k] = "cold"; window[t+"-l3-"+k] = "/level1/cold.png";
window[t+"-o4"+k] = "water"; window[t+"-l4-"+k] = "/level1/water.png";
window[t+"-ans"+k] = 3;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "തണുത്ത വെള്ളം"; window[t+"-m"+k] = "mal/level1/cold-water.mp3"; //m is music
window[t+"-l"+k] = 6; //how many options are there
window[t+"-o1"+k] = "water";
window[t+"-o2"+k] = "my";
window[t+"-o3"+k] = "what";
window[t+"-o4"+k] = "big";
window[t+"-o5"+k] = "hot";
window[t+"-o6"+k] = "cold";
window[t+"-ans"+k] = [6,1];

k++;
window[t+"-type"+k] = "image";
window[t+"-q"+k] = "ചൂട്"; window[t+"-m"+k] = "mal/level1/hot.mp3"; //m is music
window[t+"-o1"+k] = "tea"; window[t+"-l1-"+k] = "/level1/tea.png";
window[t+"-o2"+k] = "hot"; window[t+"-l2-"+k] = "/level1/hot.png";
window[t+"-o3"+k] = "cold"; window[t+"-l3-"+k] = "/level1/cold.png";
window[t+"-o4"+k] = "water"; window[t+"-l4-"+k] = "/level1/water.png";
window[t+"-ans"+k] = 2;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "ചൂട് വെള്ളം"; window[t+"-m"+k] = "mal/level1/hot-water.mp3"; //m is music
window[t+"-l"+k] = 6; //how many options are there
window[t+"-o1"+k] = "water";
window[t+"-o2"+k] = "my";
window[t+"-o3"+k] = "what";
window[t+"-o4"+k] = "big";
window[t+"-o5"+k] = "hot";
window[t+"-o6"+k] = "cold";
window[t+"-ans"+k] = [5,1];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "നിങ്ങളുടെ കാർ കൂടാതെ എൻ്റെ വീട്"; window[t+"-m"+k] = "mal/level1/your-car-and-my-house.mp3"; //m is music
window[t+"-n"+k] = "കൂടാതെ"; window[t+"-n-m"+k] = "and"; //n means new words, n-m means new word's meaning
window[t+"-l"+k] = 8; //how many options are there
window[t+"-o1"+k] = "house";
window[t+"-o2"+k] = "hot";
window[t+"-o3"+k] = "your";
window[t+"-o4"+k] = "my";
window[t+"-o5"+k] = "tea";
window[t+"-o6"+k] = "and";
window[t+"-o7"+k] = "she";
window[t+"-o8"+k] = "car";
window[t+"-ans"+k] = [3,8,6,4,1];

k++;
window[t+"-type"+k] = "voice-mcq";
window[t+"-q"+k] = "mal/level1/hot-and-cold.mp3"; //file name
window[t+"-l"+k] = 7; //how many options are there
window[t+"-o1"+k] = "എൻ്റെ";
window[t+"-o2"+k] = "ചൂട്";
window[t+"-o3"+k] = "തണുപ്പ്";
window[t+"-o4"+k] = "അവളുടെ";
window[t+"-o5"+k] = "ചെറുത്";
window[t+"-o6"+k] = "കൂടാതെ";
window[t+"-o7"+k] = "ചായ";
window[t+"-ans"+k] = [2,6,3];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "ചൂട് ചായ"; window[t+"-m"+k] = "mal/level1/hot-tea.mp3"; //m is music
window[t+"-l"+k] = 6; //how many options are there
window[t+"-o1"+k] = "tea";
window[t+"-o2"+k] = "water";
window[t+"-o3"+k] = "what";
window[t+"-o4"+k] = "your";
window[t+"-o5"+k] = "hot";
window[t+"-o6"+k] = "cold";
window[t+"-ans"+k] = [5,1];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "Hot tea and cold water"; window[t+"-m"+k] = null; //m is music
window[t+"-n"+k] = "കൂടാതെ"; window[t+"-n-m"+k] = "and"; //n means new words, n-m means new word's meaning
window[t+"-l"+k] = 9; //how many options are there
window[t+"-o1"+k] = "നിങ്ങളുടെ";
window[t+"-o2"+k] = "ചൂട്";
window[t+"-o3"+k] = "പേര്";
window[t+"-o4"+k] = "ചായ";
window[t+"-o5"+k] = "വലുത്";
window[t+"-o6"+k] = "അവളുടെ";
window[t+"-o7"+k] = "വെള്ളം";
window[t+"-o8"+k] = "തണുപ്പ്";
window[t+"-o9"+k] = "കൂടാതെ";
window[t+"-ans"+k] = [2,4,9,8,7];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "Hot and cold"; window[t+"-m"+k] = null; //m is music
window[t+"-l"+k] = 7; //how many options are there
window[t+"-o1"+k] = "അവളുടെ";
window[t+"-o2"+k] = "പേര്";
window[t+"-o3"+k] = "ചൂട്";
window[t+"-o4"+k] = "എൻ്റെ";
window[t+"-o5"+k] = "കൂടാതെ";
window[t+"-o6"+k] = "വലുത്";
window[t+"-o7"+k] = "തണുപ്പ്";
window[t+"-ans"+k] = [3,5,7];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "My tea is hot"; window[t+"-m"+k] = null; //m is music
window[t+"-l"+k] = 8; //how many options are there
window[t+"-o1"+k] = "ചായ";
window[t+"-o2"+k] = "വീട്";
window[t+"-o3"+k] = "ചൂട്";
window[t+"-o4"+k] = "ആണ്";
window[t+"-o5"+k] = "വലുത്";
window[t+"-o6"+k] = "കാർ";
window[t+"-o7"+k] = "എൻ്റെ";
window[t+"-o8"+k] = "അവൻ്റെ";
window[t+"-ans"+k] = [7,1,3,4];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "Your car and my house"; window[t+"-m"+k] = null; //m is music
window[t+"-l"+k] = 9; //how many options are there
window[t+"-o1"+k] = "വീട്";
window[t+"-o2"+k] = "കാർ";
window[t+"-o3"+k] = "അവൻ്റെ";
window[t+"-o4"+k] = "എൻ്റെ";
window[t+"-o5"+k] = "കൂടാതെ";
window[t+"-o6"+k] = "അവളുടെ";
window[t+"-o7"+k] = "തണുപ്പ്";
window[t+"-o8"+k] = "ചായ";
window[t+"-o9"+k] = "നിങ്ങളുടെ";
window[t+"-ans"+k] = [9,2,5,4,1];

lesson2Total = k;
k=0;t='c';

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "എന്ത്?"; window[t+"-m"+k] = "mal/level1/what.mp3"; //m is music
window[t+"-o1"+k] = "and";
window[t+"-o2"+k] = "big";
window[t+"-o3"+k] = "what";
window[t+"-o4"+k] = "your";
window[t+"-ans"+k] = 3;

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "what"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "എന്ത്";
window[t+"-o2"+k] = "ചെറുത്";
window[t+"-o3"+k] = "തണുപ്പ്";
window[t+"-o4"+k] = "വലുത്";
window[t+"-ans"+k] = 1;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "അവളുടെ കാർ"; window[t+"-m"+k] = "mal/level1/her-car.mp3"; //m is music
window[t+"-l"+k] = 5; //how many options are there
window[t+"-o1"+k] = "tea";
window[t+"-o2"+k] = "cold";
window[t+"-o3"+k] = "my";
window[t+"-o4"+k] = "car";
window[t+"-o5"+k] = "her";
window[t+"-ans"+k] = [5,4];

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "she"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "വീട്";
window[t+"-o2"+k] = "അവളുടെ";
window[t+"-o3"+k] = "ചെറുത്";
window[t+"-o4"+k] = "എൻ്റെ";
window[t+"-ans"+k] = 2;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "അവളുടെ ചായ ചൂടാണ്"; window[t+"-m"+k] = "mal/level1/her-tea-is-hot.mp3"; //m is music
window[t+"-l"+k] = 7; //how many options are there
window[t+"-o1"+k] = "is";
window[t+"-o2"+k] = "tea";
window[t+"-o3"+k] = "hot";
window[t+"-o4"+k] = "car";
window[t+"-o5"+k] = "Aamir";
window[t+"-o6"+k] = "her";
window[t+"-o7"+k] = "water";
window[t+"-ans"+k] = [6,2,3,1];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "എൻ്റെ പേര്"; window[t+"-m"+k] = "mal/level1/my-name.mp3"; //m is music
window[t+"-n"+k] = "പേര്"; window[t+"-n-m"+k] = "name"; //n means new word, n-m means new word's meaning
window[t+"-l"+k] = 7; //how many options are there
window[t+"-o1"+k] = "hot";
window[t+"-o2"+k] = "is";
window[t+"-o3"+k] = "tea";
window[t+"-o4"+k] = "she";
window[t+"-o5"+k] = "my";
window[t+"-o6"+k] = "name";
window[t+"-o7"+k] = "water";
window[t+"-ans"+k] = [5,6];

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "name"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "ചെറുത്";
window[t+"-o2"+k] = "പേര്";
window[t+"-o3"+k] = "ആണ്";
window[t+"-o4"+k] = "തണുപ്പ്";
window[t+"-ans"+k] = 2;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "അവൻ്റെ പേര് എന്താണ്?"; window[t+"-m"+k] = "mal/level1/what-is-her-name.mp3"; //m is music
window[t+"-n"+k] = "പേര്"; window[t+"-n-m"+k] = "name"; //n means new word, n-m means new word's meaning
window[t+"-l"+k] = 6; //how many options are there
window[t+"-o1"+k] = "what";
window[t+"-o2"+k] = "small";
window[t+"-o3"+k] = "hot";
window[t+"-o4"+k] = "her";
window[t+"-o5"+k] = "is";
window[t+"-o6"+k] = "name";
window[t+"-ans"+k] = [4,6,1,5];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "അവളുടെ ചായ തണുപ്പ് ആണ്"; window[t+"-m"+k] = "mal/level1/his-tea-is-cold.mp3"; //m is music
window[t+"-l"+k] = 8; //how many options are there
window[t+"-o1"+k] = "what";
window[t+"-o2"+k] = "is";
window[t+"-o3"+k] = "his";
window[t+"-o4"+k] = "big";
window[t+"-o5"+k] = "cold";
window[t+"-o6"+k] = "tea";
window[t+"-o7"+k] = "car";
window[t+"-o8"+k] = "name";
window[t+"-ans"+k] = [3,6,5,2];

k++;
window[t+"-type"+k] = "match";
window[t+"-l"+k] = 5; //how many options are there
window[t+"-o-l-1"+k] = "is"; window[t+"-o-r-1"+k] = "ആണ്";
window[t+"-o-l-2"+k] = "water"; window[t+"-o-r-2"+k] = "വെള്ളം";
window[t+"-o-l-3"+k] = "big"; window[t+"-o-r-3"+k] = "വലുത്";
window[t+"-o-l-4"+k] = "name"; window[t+"-o-r-4"+k] = "പേര്";
window[t+"-o-l-5"+k] = "house"; window[t+"-o-r-5"+k] = "വീട്";

k++;
window[t+"-type"+k] = "voice-mcq";
window[t+"-q"+k] = "mal/level1/his-name-is-john.mp3"; //file name
window[t+"-l"+k] = 8; //how many options are there
window[t+"-o1"+k] = "അവൻ്റെ";
window[t+"-o2"+k] = "ജോൺ";
window[t+"-o3"+k] = "കാർ";
window[t+"-o4"+k] = "ചെറുത്";
window[t+"-o5"+k] = "ആണ്";
window[t+"-o6"+k] = "എൻ്റെ";
window[t+"-o7"+k] = "വീട്";
window[t+"-o8"+k] = "പേര്";
window[t+"-ans"+k] = [1,8,2,5];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "her name"; window[t+"-m"+k] = null; //m is music
window[t+"-l"+k] = 6; //how many options are there
window[t+"-o1"+k] = "പേര്";
window[t+"-o2"+k] = "അവളുടെ";
window[t+"-o3"+k] = "വെള്ളം";
window[t+"-o4"+k] = "വീട്";
window[t+"-o5"+k] = "ചെറുത്";
window[t+"-o6"+k] = "ചൂട്";
window[t+"-ans"+k] = [2,1];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "His tea is cold"; window[t+"-m"+k] = null; //m is music
window[t+"-l"+k] = 8; //how many options are there
window[t+"-o1"+k] = "പേര്";
window[t+"-o2"+k] = "ചായ";
window[t+"-o3"+k] = "അവൻ്റെ";
window[t+"-o4"+k] = "ചെറുത്";
window[t+"-o5"+k] = "ആണ്";
window[t+"-o6"+k] = "തണുപ്പ്";
window[t+"-o7"+k] = "കാർ";
window[t+"-o8"+k] = "നിങ്ങളുടെ";
window[t+"-ans"+k] = [3,2,6,5];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "His name is John"; window[t+"-m"+k] = null; //m is music
window[t+"-l"+k] = 8; //how many options are there
window[t+"-o1"+k] = "പേര്";
window[t+"-o2"+k] = "ചായ";
window[t+"-o3"+k] = "അവൻ്റെ";
window[t+"-o4"+k] = "ചെറുത്";
window[t+"-o5"+k] = "ആണ്";
window[t+"-o6"+k] = "തണുപ്പ്";
window[t+"-o7"+k] = "കാർ";
window[t+"-o8"+k] = "ജോൺ";
window[t+"-ans"+k] = [3,1,8,5];

lesson3Total = k;
k=0;t='d';

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "house"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "കാർ";
window[t+"-o2"+k] = "വീട്";
window[t+"-o3"+k] = "ആണ്";
window[t+"-o4"+k] = "പേര്";
window[t+"-ans"+k] = 2;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "അവൻ്റെ പേര് എന്ത് ആണ്"; window[t+"-m"+k] = "mal/level1/what-is-her-name.mp3"; //m is music
window[t+"-l"+k] = 7; //how many options are there
window[t+"-o1"+k] = "big";
window[t+"-o2"+k] = "her";
window[t+"-o3"+k] = "tea";
window[t+"-o4"+k] = "name";
window[t+"-o5"+k] = "what";
window[t+"-o6"+k] = "is";
window[t+"-o7"+k] = "house";
window[t+"-ans"+k] = [5,6,2,4];

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "car"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "ആണ്";
window[t+"-o2"+k] = "നിങ്ങളുടെ";
window[t+"-o3"+k] = "കാർ";
window[t+"-o4"+k] = "പേര്";
window[t+"-ans"+k] = 3;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "നിങ്ങളുടെ വെള്ളം ചൂടാണ്"; window[t+"-m"+k] = "mal/level1/your-water-is-hot.mp3"; //m is music
window[t+"-l"+k] = 7; //how many options are there
window[t+"-o1"+k] = "your";
window[t+"-o2"+k] = "she";
window[t+"-o3"+k] = "tea";
window[t+"-o4"+k] = "name";
window[t+"-o5"+k] = "water";
window[t+"-o6"+k] = "is";
window[t+"-o7"+k] = "hot";
window[t+"-ans"+k] = [1,5,7,6];

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "my"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "ആണ്";
window[t+"-o2"+k] = "നിങ്ങളുടെ";
window[t+"-o3"+k] = "കാർ";
window[t+"-o4"+k] = "എൻ്റെ";
window[t+"-ans"+k] = 4;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "അവൻ്റെ പേര് എന്ത് ആണ്"; window[t+"-m"+k] = "mal/level1/what-is-his-name.mp3"; //m is music
window[t+"-l"+k] = 7; //how many options are there
window[t+"-o1"+k] = "big";
window[t+"-o2"+k] = "his";
window[t+"-o3"+k] = "tea";
window[t+"-o4"+k] = "name";
window[t+"-o5"+k] = "what";
window[t+"-o6"+k] = "is";
window[t+"-o7"+k] = "house";
window[t+"-ans"+k] = [2,4,5,6];

k++;
window[t+"-type"+k] = "voice-mcq";
window[t+"-q"+k] = "mal/level1/my-house-is-small.mp3"; //file name
window[t+"-l"+k] = 7; //how many options are there
window[t+"-o1"+k] = "എൻ്റെ";
window[t+"-o2"+k] = "ചൂട്";
window[t+"-o3"+k] = "വീട്";
window[t+"-o4"+k] = "അവളുടെ";
window[t+"-o5"+k] = "ചെറുത്";
window[t+"-o6"+k] = "കൂടാതെ";
window[t+"-o7"+k] = "ആണ്";
window[t+"-ans"+k] = [1,3,5,7];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "നിങ്ങളുടെ കാർ കൂടാതെ എൻ്റെ വീട്"; window[t+"-m"+k] = "mal/level1/your-car-and-my-house.mp3"; //m is music
window[t+"-l"+k] = 8; //how many options are there
window[t+"-o1"+k] = "small";
window[t+"-o2"+k] = "my";
window[t+"-o3"+k] = "what";
window[t+"-o4"+k] = "car";
window[t+"-o5"+k] = "is";
window[t+"-o6"+k] = "your";
window[t+"-o7"+k] = "house";
window[t+"-o8"+k] = "and";
window[t+"-ans"+k] = [6,4,8,2,7];

k++;
window[t+"-type"+k] = "voice-mcq";
window[t+"-q"+k] = "mal/level1/her-tea-is-cold.mp3"; //file name
window[t+"-l"+k] = 7; //how many options are there
window[t+"-o1"+k] = "എൻ്റെ";
window[t+"-o2"+k] = "ചൂട്";
window[t+"-o3"+k] = "ചായ";
window[t+"-o4"+k] = "അവൻ്റെ";
window[t+"-o5"+k] = "തണുപ്പ്";
window[t+"-o6"+k] = "കൂടാതെ";
window[t+"-o7"+k] = "ആണ്";
window[t+"-ans"+k] = [4,3,5,7];

