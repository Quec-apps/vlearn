//Lesson1 [New Words]

k=0;t='a';

k++;
window[t+"-type"+k] = "message";
window[t+"-ti"+k] = "നമുക്ക് തുടങ്ങാം!"; //title
window[t+"-msg"+k] = "ലളിതവും ഏറ്റവും കൂടുതൽ ഉപയോഗിക്കുന്നതുമായ വാക്കുകൾ പഠിച്ചുകൊണ്ട് നമുക്ക് ആരംഭിക്കാം."; //message

k++;
window[t+"-type"+k] = "image";
window[t+"-q"+k] = "House"; window[t+"-m"+k] = "eng/level1/house.mp3"; //m is music
window[t+"-n"+k] = "House"; window[t+"-n-m"+k] = "വീട്"; //n means new words, n-m means new word's meaning
window[t+"-o1"+k] = "വെള്ളം"; window[t+"-l1-"+k] = "/level1/water.png"; window[t+"-m1-"+k] = null;
window[t+"-o2"+k] = "ചായ"; window[t+"-l2-"+k] = "/level1/tea.png"; window[t+"-m2-"+k] = null;
window[t+"-o3"+k] = "വീട്"; window[t+"-l3-"+k] = "/level1/house.png"; window[t+"-m3-"+k] = null;
window[t+"-o4"+k] = "കാർ"; window[t+"-l4-"+k] = "/level1/car.png"; window[t+"-m4-"+k] = null;
window[t+"-ans"+k] = 3;

k++;
window[t+"-type"+k] = "image";
window[t+"-q"+k] = "Car"; window[t+"-m"+k] = "eng/level1/car.mp3"; //m is music
window[t+"-n"+k] = "Car"; window[t+"-n-m"+k] = "കാർ";
window[t+"-o1"+k] = "ചൂട്"; window[t+"-l1-"+k] = "/level1/hot.png";
window[t+"-o2"+k] = "വീട്"; window[t+"-l2-"+k] = "/level1/house.png";
window[t+"-o3"+k] = "കാർ"; window[t+"-l3-"+k] = "/level1/car.png";
window[t+"-o4"+k] = "തണുപ്പ്"; window[t+"-l4-"+k] = "/level1/cold.png";
window[t+"-ans"+k] = 3;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "My car"; window[t+"-m"+k] = "eng/level1/my-car.mp3"; //m is music
window[t+"-n"+k] = "My"; window[t+"-n-m"+k] = "എൻ്റെ";
window[t+"-l"+k] = 6; //how many options are there
window[t+"-o1"+k] = "കാർ";
window[t+"-o2"+k] = "എന്ത്";
window[t+"-o3"+k] = "അവൻ്റെ";
window[t+"-o4"+k] = "ചെറുത്";
window[t+"-o5"+k] = "എൻ്റെ";
window[t+"-o6"+k] = "തണുപ്പ്";
window[t+"-ans"+k] = [5,1];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "Your car"; window[t+"-m"+k] = "eng/level1/your-car.mp3"; //m is music
window[t+"-n"+k] = "Your"; window[t+"-n-m"+k] = "നിങ്ങളുടെ / നിൻ്റെ";
window[t+"-l"+k] = 6; //how many options are there
window[t+"-o1"+k] = "വലുത്";
window[t+"-o2"+k] = "തണുപ്പ്";
window[t+"-o3"+k] = "എൻ്റെ";
window[t+"-o4"+k] = "നിങ്ങളുടെ";
window[t+"-o5"+k] = "കാർ";
window[t+"-o6"+k] = "ചായ";
window[t+"-ans"+k] = [4,5];

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "നിങ്ങളുടെ"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "your";
window[t+"-o2"+k] = "big";
window[t+"-o3"+k] = "car";
window[t+"-o4"+k] = "tea";
window[t+"-ans"+k] = 1;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "My house"; window[t+"-m"+k] = "eng/level1/my-house.mp3"; //m is music
window[t+"-l"+k] = 6; //how many options are there
window[t+"-o1"+k] = "വെള്ളം";
window[t+"-o2"+k] = "നിങ്ങളുടെ";
window[t+"-o3"+k] = "വീട്";
window[t+"-o4"+k] = "ചൂട്";
window[t+"-o5"+k] = "എൻ്റെ";
window[t+"-o6"+k] = "ചെറുത്";
window[t+"-ans"+k] = [5,3];

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "ആണ്"; window[t+"-m"+k] = null; //m is music
window[t+"-n"+k] = "is"; window[t+"-n-m"+k] = "ആണ്";
window[t+"-o1"+k] = "house";
window[t+"-o2"+k] = "is";
window[t+"-o3"+k] = "car";
window[t+"-o4"+k] = "cold";
window[t+"-ans"+k] = 2;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "My car is big"; window[t+"-m"+k] = "eng/level1/my-car-is-big.mp3"; //m is music
window[t+"-n"+k] = "big"; window[t+"-n-m"+k] = "വലുത്";
window[t+"-l"+k] = 8; //how many options are there
window[t+"-o1"+k] = "ആണ്";
window[t+"-o2"+k] = "വലുത്";
window[t+"-o3"+k] = "കാർ";
window[t+"-o4"+k] = "എൻ്റെ";
window[t+"-o5"+k] = "വീട്";
window[t+"-o6"+k] = "അവൻ്റെ";
window[t+"-o7"+k] = "നിങ്ങളുടെ";
window[t+"-o8"+k] = "തണുപ്പ്";
window[t+"-ans"+k] = [4,3,2,1];

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "വലുത്"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "your";
window[t+"-o2"+k] = "big";
window[t+"-o3"+k] = "small";
window[t+"-o4"+k] = "is";
window[t+"-ans"+k] = 2;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "My car is small"; window[t+"-m"+k] = "eng/level1/my-car-is-small.mp3"; //m is music
window[t+"-n"+k] = "small"; window[t+"-n-m"+k] = "ചെറുത്";
window[t+"-l"+k] = 8; //how many options are there
window[t+"-o1"+k] = "ആണ്";
window[t+"-o2"+k] = "വലുത്";
window[t+"-o3"+k] = "അവൻ്റെ";
window[t+"-o4"+k] = "എൻ്റെ";
window[t+"-o5"+k] = "വീട്";
window[t+"-o6"+k] = "കാർ";
window[t+"-o7"+k] = "ചെറുത്";
window[t+"-o8"+k] = "തണുപ്പ്";
window[t+"-ans"+k] = [4,6,7,1];

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "ചെറുത്"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "your";
window[t+"-o2"+k] = "big";
window[t+"-o3"+k] = "small";
window[t+"-o4"+k] = "is";
window[t+"-ans"+k] = 3;

k++;
window[t+"-type"+k] = "match";
window[t+"-l"+k] = 5; //how many options are there
window[t+"-o-l-1"+k] = "കാർ"; window[t+"-o-r-1"+k] = "car";
window[t+"-o-l-2"+k] = "വലുത്"; window[t+"-o-r-2"+k] = "big";
window[t+"-o-l-3"+k] = "എൻ്റെ"; window[t+"-o-r-3"+k] = "my";
window[t+"-o-l-4"+k] = "ആണ്"; window[t+"-o-r-4"+k] = "is";
window[t+"-o-l-5"+k] = "നിങ്ങളുടെ"; window[t+"-o-r-5"+k] = "your";

k++;
window[t+"-type"+k] = "match";
window[t+"-l"+k] = 5; //how many options are there
window[t+"-o-l-1"+k] = "ചെറുത്"; window[t+"-o-r-1"+k] = "Small";
window[t+"-o-l-2"+k] = "ആണ്"; window[t+"-o-r-2"+k] = "is";
window[t+"-o-l-3"+k] = "കാർ"; window[t+"-o-r-3"+k] = "car";
window[t+"-o-l-4"+k] = "വലുത്"; window[t+"-o-r-4"+k] = "big";
window[t+"-o-l-5"+k] = "വീട്"; window[t+"-o-r-5"+k] = "house";

k++;
window[t+"-type"+k] = "match";
window[t+"-l"+k] = 5; //how many options are there
window[t+"-o-l-1"+k] = "കാർ"; window[t+"-o-r-1"+k] = "car";
window[t+"-o-l-2"+k] = "വലുത്"; window[t+"-o-r-2"+k] = "big";
window[t+"-o-l-3"+k] = "എൻ്റെ"; window[t+"-o-r-3"+k] = "my";
window[t+"-o-l-4"+k] = "നിങ്ങളുടെ"; window[t+"-o-r-4"+k] = "your";
window[t+"-o-l-5"+k] = "വീട്"; window[t+"-o-r-5"+k] = "house";

k++;
window[t+"-type"+k] = "image";
window[t+"-q"+k] = "Water"; window[t+"-m"+k] = "eng/level1/water.mp3"; //m is music
window[t+"-n"+k] = "Water"; window[t+"-n-m"+k] = "വെള്ളം";
window[t+"-o1"+k] = "ചായ"; window[t+"-l1-"+k] = "/level1/tea.png";
window[t+"-o2"+k] = "വെള്ളം"; window[t+"-l2-"+k] = "/level1/water.png";
window[t+"-o3"+k] = "തണുപ്പ്"; window[t+"-l3-"+k] = "/level1/cold.png";
window[t+"-o4"+k] = "ചൂട്"; window[t+"-l4-"+k] = "/level1/hot.png";
window[t+"-ans"+k] = 2;

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "വെള്ളം"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "my";
window[t+"-o2"+k] = "tea";
window[t+"-o3"+k] = "water";
window[t+"-o4"+k] = "cold";
window[t+"-ans"+k] = 3;

k++;
window[t+"-type"+k] = "image";
window[t+"-q"+k] = "Tea"; window[t+"-m"+k] = "eng/level1/tea.mp3"; //m is music
window[t+"-n"+k] = "Tea"; window[t+"-n-m"+k] = "ചായ";
window[t+"-o1"+k] = "തണുപ്പ്"; window[t+"-l1-"+k] = "/level1/cold.png";
window[t+"-o2"+k] = "ചായ"; window[t+"-l2-"+k] = "/level1/tea.png";
window[t+"-o3"+k] = "വെള്ളം"; window[t+"-l3-"+k] = "/level1/water.png";
window[t+"-o4"+k] = "ചൂട്"; window[t+"-l4-"+k] = "/level1/hot.png";
window[t+"-ans"+k] = 2;

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "ചായ"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "big";
window[t+"-o2"+k] = "tea";
window[t+"-o3"+k] = "house";
window[t+"-o4"+k] = "cold";
window[t+"-ans"+k] = 2;

k++;
window[t+"-type"+k] = "image";
window[t+"-q"+k] = "Cold"; window[t+"-m"+k] = "eng/level1/cold.mp3"; //m is music
window[t+"-n"+k] = "Cold"; window[t+"-n-m"+k] = "തണുപ്പ്";
window[t+"-o1"+k] = "ചായ"; window[t+"-l1-"+k] = "/level1/tea.png";
window[t+"-o2"+k] = "ചൂട്"; window[t+"-l2-"+k] = "/level1/hot.png";
window[t+"-o3"+k] = "തണുപ്പ്"; window[t+"-l3-"+k] = "/level1/cold.png";
window[t+"-o4"+k] = "വെള്ളം"; window[t+"-l4-"+k] = "/level1/water.png";
window[t+"-ans"+k] = 3;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "Cold water"; window[t+"-m"+k] = "eng/level1/cold-water.mp3"; //m is music
window[t+"-l"+k] = 6; //how many options are there
window[t+"-o1"+k] = "വെള്ളം";
window[t+"-o2"+k] = "എൻ്റെ";
window[t+"-o3"+k] = "എന്ത്";
window[t+"-o4"+k] = "വലുത്";
window[t+"-o5"+k] = "ചൂട്";
window[t+"-o6"+k] = "തണുത്ത";
window[t+"-ans"+k] = [6,1];

k++;
window[t+"-type"+k] = "image";
window[t+"-q"+k] = "Hot"; window[t+"-m"+k] = "eng/level1/hot.mp3"; //m is music
window[t+"-n"+k] = "Hot"; window[t+"-n-m"+k] = "ചൂട്";
window[t+"-o1"+k] = "ചായ"; window[t+"-l1-"+k] = "/level1/tea.png";
window[t+"-o2"+k] = "ചൂട്"; window[t+"-l2-"+k] = "/level1/hot.png";
window[t+"-o3"+k] = "തണുപ്പ്"; window[t+"-l3-"+k] = "/level1/cold.png";
window[t+"-o4"+k] = "വെള്ളം"; window[t+"-l4-"+k] = "/level1/water.png";
window[t+"-ans"+k] = 2;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "Hot water"; window[t+"-m"+k] = "eng/level1/hot-water.mp3"; //m is music
window[t+"-l"+k] = 6; //how many options are there
window[t+"-o1"+k] = "വെള്ളം";
window[t+"-o2"+k] = "എൻ്റെ";
window[t+"-o3"+k] = "എന്ത്";
window[t+"-o4"+k] = "വലുത്";
window[t+"-o5"+k] = "ചൂട്";
window[t+"-o6"+k] = "തണുപ്പ്";
window[t+"-ans"+k] = [5,1];

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "What?"; window[t+"-m"+k] = "eng/level1/what.mp3"; //m is music
window[t+"-n"+k] = "What"; window[t+"-n-m"+k] = "എന്ത്";
window[t+"-o1"+k] = "കൂടാതെ";
window[t+"-o2"+k] = "വലുത്";
window[t+"-o3"+k] = "എന്ത്";
window[t+"-o4"+k] = "നിങ്ങളുടെ";
window[t+"-ans"+k] = 3;

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "എന്ത്"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "what";
window[t+"-o2"+k] = "small";
window[t+"-o3"+k] = "cold";
window[t+"-o4"+k] = "big";
window[t+"-ans"+k] = 1;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "Her car"; window[t+"-m"+k] = "eng/level1/her-car.mp3"; //m is music
window[t+"-n"+k] = "Her"; window[t+"-n-m"+k] = "അവളുടെ";
window[t+"-l"+k] = 5; //how many options are there
window[t+"-o1"+k] = "ചായ";
window[t+"-o2"+k] = "തണുപ്പ്";
window[t+"-o3"+k] = "എൻ്റെ";
window[t+"-o4"+k] = "കാർ";
window[t+"-o5"+k] = "അവളുടെ";
window[t+"-ans"+k] = [5,4];

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "അവളുടെ"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "house";
window[t+"-o2"+k] = "her";
window[t+"-o3"+k] = "small";
window[t+"-o4"+k] = "my";
window[t+"-ans"+k] = 2;

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "അവൻ്റെ"; window[t+"-m"+k] = null; //m is music
window[t+"-n"+k] = "His"; window[t+"-n-m"+k] = "അവൻ്റെ";
window[t+"-o1"+k] = "house";
window[t+"-o2"+k] = "his";
window[t+"-o3"+k] = "my";
window[t+"-o4"+k] = "small";
window[t+"-ans"+k] = 2;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "My name"; window[t+"-m"+k] = "eng/level1/my-name.mp3"; //m is music
window[t+"-n"+k] = "name"; window[t+"-n-m"+k] = "പേര്"; //n means new word, n-m means new word's meaning
window[t+"-l"+k] = 7; //how many options are there
window[t+"-o1"+k] = "ചൂട്";
window[t+"-o2"+k] = "ആണ്";
window[t+"-o3"+k] = "ചായ";
window[t+"-o4"+k] = "അവൻ്റെ";
window[t+"-o5"+k] = "എൻ്റെ";
window[t+"-o6"+k] = "പേര്";
window[t+"-o7"+k] = "വെള്ളം";
window[t+"-ans"+k] = [5,6];

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "പേര്"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "small";
window[t+"-o2"+k] = "name";
window[t+"-o3"+k] = "is";
window[t+"-o4"+k] = "cold";
window[t+"-ans"+k] = 2;

k++;
window[t+"-type"+k] = "image";
window[t+"-q"+k] = "Girl"; window[t+"-m"+k] = "eng/level2/girl.mp3"; //m is music
window[t+"-n"+k] = "girl"; window[t+"-n-m"+k] = "പെൺകുട്ടി"; //n means new words, n-m means new word's meaning
window[t+"-o1"+k] = "വെള്ളം"; window[t+"-l1-"+k] = "/level1/water.png";
window[t+"-o2"+k] = "വിദ്യാർത്ഥി"; window[t+"-l2-"+k] = "/level2/student.png";
window[t+"-o3"+k] = "ആൺകുട്ടി"; window[t+"-l3-"+k] = "/level2/boy.png";
window[t+"-o4"+k] = "പെൺകുട്ടി"; window[t+"-l4-"+k] = "/level2/girl.png";
window[t+"-ans"+k] = 4;

k++;
window[t+"-type"+k] = "image";
window[t+"-q"+k] = "Student"; window[t+"-m"+k] = "eng/level2/student.mp3"; //m is music
window[t+"-n"+k] = "student"; window[t+"-n-m"+k] = "വിദ്യാർത്ഥി"; //n means new words, n-m means new word's meaning
window[t+"-o1"+k] = "ചൂട്"; window[t+"-l1-"+k] = "/level1/hot.png";
window[t+"-o2"+k] = "വിദ്യാർത്ഥി"; window[t+"-l2-"+k] = "/level2/student.png";
window[t+"-o3"+k] = "ആൺകുട്ടി"; window[t+"-l3-"+k] = "/level2/boy.png";
window[t+"-o4"+k] = "പെൺകുട്ടി"; window[t+"-l4-"+k] = "/level2/girl.png";
window[t+"-ans"+k] = 2;

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "വിദ്യാർത്ഥി"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "cold";
window[t+"-o2"+k] = "house";
window[t+"-o3"+k] = "student";
window[t+"-o4"+k] = "a";
window[t+"-ans"+k] = 3;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "My student"; window[t+"-m"+k] = "eng/level2/my-student.mp3"; //m is music
window[t+"-l"+k] = 6; //how many options are there
window[t+"-o1"+k] = "അവൻ";
window[t+"-o2"+k] = "വിദ്യാർത്ഥി";
window[t+"-o3"+k] = "തണുപ്പ്";
window[t+"-o4"+k] = "എൻ്റെ";
window[t+"-o5"+k] = "നിങ്ങളുടെ";
window[t+"-o6"+k] = "എന്ത്";
window[t+"-ans"+k] = [4,2];

k++;
window[t+"-type"+k] = "voice-mcq";
window[t+"-q"+k] = "eng/level2/your-student.mp3"; //file name
window[t+"-l"+k] = 6; //how many options are there
window[t+"-o1"+k] = "your";
window[t+"-o2"+k] = "small";
window[t+"-o3"+k] = "tea";
window[t+"-o4"+k] = "a";
window[t+"-o5"+k] = "student";
window[t+"-o6"+k] = "happy";
window[t+"-ans"+k] = [1,5];

k++;
window[t+"-type"+k] = "image";
window[t+"-q"+k] = "Boy"; window[t+"-m"+k] = "eng/level2/boy.mp3"; //m is music
window[t+"-n"+k] = "boy"; window[t+"-n-m"+k] = "ആൺകുട്ടി"; //n means new words, n-m means new word's meaning
window[t+"-o1"+k] = "ചൂട്"; window[t+"-l1-"+k] = "/level1/hot.png";
window[t+"-o2"+k] = "വിദ്യാർത്ഥി"; window[t+"-l2-"+k] = "/level2/student.png";
window[t+"-o3"+k] = "ആൺകുട്ടി"; window[t+"-l3-"+k] = "/level2/boy.png";
window[t+"-o4"+k] = "പെൺകുട്ടി"; window[t+"-l4-"+k] = "/level2/girl.png";
window[t+"-ans"+k] = 3;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "A boy"; window[t+"-m"+k] = "eng/level2/a-boy.mp3"; //m is music
window[t+"-n"+k] = "a"; window[t+"-n-m"+k] = "ഒരു"; //n means new words, n-m means new word's meaning
window[t+"-l"+k] = 6; //how many options are there
window[t+"-o1"+k] = "അവൻ";
window[t+"-o2"+k] = "വിദ്യാർത്ഥി";
window[t+"-o3"+k] = "തണുപ്പ്";
window[t+"-o4"+k] = "ഒരു";
window[t+"-o5"+k] = "നിങ്ങളുടെ";
window[t+"-o6"+k] = "ആൺകുട്ടി";
window[t+"-ans"+k] = [4,6];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "I am a boy"; window[t+"-m"+k] = "eng/level2/i-am-a-boy.mp3"; //m is music
window[t+"-n"+k] = "I ഞാൻ"; window[t+"-n-m"+k] = "am ആണ്"; //n means new words, n-m means new word's meaning
window[t+"-l"+k] = 8; //how many options are there
window[t+"-o1"+k] = "ആൺകുട്ടി";
window[t+"-o2"+k] = "ആണ്";
window[t+"-o3"+k] = "കൂടാതെ";
window[t+"-o4"+k] = "ഒരു";
window[t+"-o5"+k] = "ഇന്ത്യ";
window[t+"-o6"+k] = "ഞാൻ";
window[t+"-o7"+k] = "സ്ത്രീ";
window[t+"-o8"+k] = "നിങ്ങളുടെ";
window[t+"-ans"+k] = [6,4,1,2];

k++;
window[t+"-type"+k] = "message";
window[t+"-ti"+k] = "പഠിച്ച വാക്കുകൾ"; //title
window[t+"-msg"+k] = "നിങ്ങൾ പഠിച്ച പുതിയ വാക്കുകൾ എന്താണ് നോക്കാം."; //message

k++;
window[t+"-type"+k] = "conversation"; xt=0;
xt++;window[t+"-q"+xt+"-l"+k] = "House"; window[t+"-t"+xt+"-l"+k] = "വീട്"; window[t+"-q"+xt+"-m"+k] = 'eng/level1/house.mp3'; //l=left,r=right q=ques,t=translated, m=music
xt++;window[t+"-q"+xt+"-l"+k] = "Car"; window[t+"-t"+xt+"-l"+k] = "കാർ"; window[t+"-q"+xt+"-m"+k] = 'eng/level1/car.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "My"; window[t+"-t"+xt+"-l"+k] = "എൻ്റെ"; window[t+"-q"+xt+"-m"+k] = 'eng/level1/my.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "Your"; window[t+"-t"+xt+"-l"+k] = "നിങ്ങളുടെ/നിൻ്റെ"; window[t+"-q"+xt+"-m"+k] = 'eng/level1/your.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "is"; window[t+"-t"+xt+"-l"+k] = "ആണ്"; window[t+"-q"+xt+"-m"+k] = 'eng/level1/is.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "big"; window[t+"-t"+xt+"-l"+k] = "വലുത്"; window[t+"-q"+xt+"-m"+k] = 'eng/level1/big.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "small"; window[t+"-t"+xt+"-l"+k] = "ചെറുത്"; window[t+"-q"+xt+"-m"+k] = 'eng/level1/small.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "Water"; window[t+"-t"+xt+"-l"+k] = "വെള്ളം"; window[t+"-q"+xt+"-m"+k] = 'eng/level1/water.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "Tea"; window[t+"-t"+xt+"-l"+k] = "ചായ"; window[t+"-q"+xt+"-m"+k] = 'eng/level1/tea.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "Cold"; window[t+"-t"+xt+"-l"+k] = "തണുപ്പ്"; window[t+"-q"+xt+"-m"+k] = 'eng/level1/cold.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "Hot"; window[t+"-t"+xt+"-l"+k] = "ചൂട്"; window[t+"-q"+xt+"-m"+k] = 'eng/level1/hot.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "and"; window[t+"-t"+xt+"-l"+k] = "കൂടാതെ"; window[t+"-q"+xt+"-m"+k] = 'eng/level1/and.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "What"; window[t+"-t"+xt+"-l"+k] = "എന്ത്"; window[t+"-q"+xt+"-m"+k] = 'eng/level1/what.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "Her"; window[t+"-t"+xt+"-l"+k] = "അവളുടെ"; window[t+"-q"+xt+"-m"+k] = 'eng/level1/her.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "His"; window[t+"-t"+xt+"-l"+k] = "അവൻ്റെ"; window[t+"-q"+xt+"-m"+k] = 'eng/level1/his.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "name"; window[t+"-t"+xt+"-l"+k] = "പേര്"; window[t+"-q"+xt+"-m"+k] = 'eng/level1/name.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "Girl"; window[t+"-t"+xt+"-l"+k] = "പെൺകുട്ടി"; window[t+"-q"+xt+"-m"+k] = 'eng/level2/girl.mp3'; //l=left,r=right q=ques,t=translated, m=music
xt++;window[t+"-q"+xt+"-l"+k] = "Student"; window[t+"-t"+xt+"-l"+k] = "വിദ്യാർത്ഥി"; window[t+"-q"+xt+"-m"+k] = 'eng/level2/student.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "boy"; window[t+"-t"+xt+"-l"+k] = "ആൺകുട്ടി"; window[t+"-q"+xt+"-m"+k] = 'eng/level2/boy.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "a"; window[t+"-t"+xt+"-l"+k] = "ഒരു"; window[t+"-q"+xt+"-m"+k] = 'eng/level2/a.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "I"; window[t+"-t"+xt+"-l"+k] = "ഞാൻ"; window[t+"-q"+xt+"-m"+k] = 'eng/level2/i.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "am"; window[t+"-t"+xt+"-l"+k] = "ആണ്"; window[t+"-q"+xt+"-m"+k] = 'eng/level2/am.mp3';
window[t+"-len"+k]=xt;

//Lesson2

lesson1Total = k;
k=0;t='b';

k++;
window[t+"-type"+k] = "image";
window[t+"-q"+k] = "India"; window[t+"-m"+k] = "eng/level2/india.mp3"; //m is music
window[t+"-n"+k] = "India"; window[t+"-n-m"+k] = "ഇന്ത്യ"; //n means new words, n-m means new word's meaning
window[t+"-o1"+k] = "വിദ്യാർത്ഥി"; window[t+"-l1-"+k] = "/level2/student.png";
window[t+"-o2"+k] = "ആൺകുട്ടി"; window[t+"-l2-"+k] = "/level2/boy.png";
window[t+"-o3"+k] = "ഇന്ത്യ"; window[t+"-l3-"+k] = "/level2/india.png";
window[t+"-o4"+k] = "പെൺകുട്ടി"; window[t+"-l4-"+k] = "/level2/girl.png";
window[t+"-ans"+k] = 3;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "My student is from india"; window[t+"-m"+k] = "eng/level2/my-student-is-from-india.mp3"; //m is music
window[t+"-n"+k] = "From"; window[t+"-n-m"+k] = "നിന്ന്"; //n means new words, n-m means new word's meaning
window[t+"-l"+k] = 9; //how many options are there
window[t+"-o1"+k] = "ഇന്ത്യയിൽ";
window[t+"-o2"+k] = "എൻ്റെ";
window[t+"-o3"+k] = "നിന്ന്";
window[t+"-o4"+k] = "ആണ്";
window[t+"-o5"+k] = "വീട്";
window[t+"-o6"+k] = "പേര്";
window[t+"-o7"+k] = "അവൻ്റെ";
window[t+"-o8"+k] = "വിദ്യാർത്ഥി";
window[t+"-o9"+k] = "ഒരു";
window[t+"-ans"+k] = [2,8,1,3,4];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "I am from delhi"; window[t+"-m"+k] = "eng/level2/i-am-from-delhi.mp3"; //m is music
window[t+"-n"+k] = "delhi"; window[t+"-n-m"+k] = "ഡൽഹി"; //n means new words, n-m means new word's meaning
window[t+"-l"+k] = 7; //how many options are there
window[t+"-o1"+k] = "പുരുഷൻ";
window[t+"-o2"+k] = "നിങ്ങളുടെ";
window[t+"-o3"+k] = "നിന്ന്";
window[t+"-o4"+k] = "ആണ്";
window[t+"-o5"+k] = "ഞാൻ";
window[t+"-o6"+k] = "വിദ്യാർത്ഥി";
window[t+"-o7"+k] = "ഡൽഹിയിൽ";
window[t+"-ans"+k] = [5,7,3,4];

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "ഡൽഹി"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "car";
window[t+"-o2"+k] = "Delhi";
window[t+"-o3"+k] = "cold";
window[t+"-o4"+k] = "hot";
window[t+"-ans"+k] = 2;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "You are from india"; window[t+"-m"+k] = "eng/level2/you-are-from-india.mp3"; //m is music
window[t+"-n"+k] = "you : നിങ്ങൾ  , നീ"; window[t+"-n-m"+k] = "are: ആണ്"; //n means new words, n-m means new word's meaning
window[t+"-l"+k] = 7; //how many options are there
window[t+"-o1"+k] = "ഇന്ത്യയിൽ";
window[t+"-o2"+k] = "നിങ്ങളുടെ";
window[t+"-o3"+k] = "ഒരു";
window[t+"-o4"+k] = "നിങ്ങൾ";
window[t+"-o5"+k] = "ആണ്";
window[t+"-o6"+k] = "ഞാൻ";
window[t+"-o7"+k] = "നിന്ന്";
window[t+"-ans"+k] = [4,1,7,5];

k++;
window[t+"-type"+k] = "voice-mcq";
window[t+"-q"+k] = "eng/level1/your-house-is-small.mp3"; //file name
window[t+"-l"+k] = 8; //how many options are there
window[t+"-o1"+k] = "small";
window[t+"-o2"+k] = "is";
window[t+"-o3"+k] = "house";
window[t+"-o4"+k] = "his";
window[t+"-o5"+k] = "your";
window[t+"-o6"+k] = "cold";
window[t+"-o7"+k] = "and";
window[t+"-o8"+k] = "my";
window[t+"-ans"+k] = [5,3,2,1];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "Your car and my house"; window[t+"-m"+k] = "eng/level1/your-car-and-my-house.mp3"; //m is music
window[t+"-n"+k] = "and"; window[t+"-n-m"+k] = "കൂടാതെ"; //n means new words, n-m means new word's meaning
window[t+"-l"+k] = 8; //how many options are there
window[t+"-o1"+k] = "വീട്";
window[t+"-o2"+k] = "ചൂട്";
window[t+"-o3"+k] = "നിങ്ങളുടെ";
window[t+"-o4"+k] = "എൻ്റെ";
window[t+"-o5"+k] = "ചായ";
window[t+"-o6"+k] = "കൂടാതെ";
window[t+"-o7"+k] = "അവൻ്റെ";
window[t+"-o8"+k] = "കാർ";
window[t+"-ans"+k] = [3,8,6,4,1];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "You are happy"; window[t+"-m"+k] = "eng/level2/you-are-happy.mp3"; //m is music
window[t+"-n"+k] = "happy"; window[t+"-n-m"+k] = "സന്തോഷം"; //n means new words, n-m means new word's meaning
window[t+"-l"+k] = 7; //how many options are there
window[t+"-o1"+k] = "നിങ്ങളുടെ";
window[t+"-o2"+k] = "സ്ത്രീ";
window[t+"-o3"+k] = "ആണ്";
window[t+"-o4"+k] = "കൂടാതെ";
window[t+"-o5"+k] = "നിങ്ങൾ";
window[t+"-o6"+k] = "ഒരു";
window[t+"-o7"+k] = "സന്തോഷവാൻ";
window[t+"-ans"+k] = [5,7,3];

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "സന്തോഷം"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "india";
window[t+"-o2"+k] = "happy";
window[t+"-o3"+k] = "a";
window[t+"-o4"+k] = "is";
window[t+"-ans"+k] = 2;

k++;
window[t+"-type"+k] = "image";
window[t+"-q"+k] = "Man"; window[t+"-m"+k] = "eng/level2/man.mp3"; //m is music
window[t+"-n"+k] = "man"; window[t+"-n-m"+k] = "പുരുഷൻ"; //n means new words, n-m means new word's meaning
window[t+"-o1"+k] = "സ്ത്രീ"; window[t+"-l1-"+k] = "/level2/woman.png";
window[t+"-o2"+k] = "പെൺകുട്ടി"; window[t+"-l2-"+k] = "/level2/girl.png";
window[t+"-o3"+k] = "പുരുഷൻ"; window[t+"-l3-"+k] = "/level2/man.png";
window[t+"-o4"+k] = "വിദ്യാർത്ഥി"; window[t+"-l4-"+k] = "/level2/student.png";
window[t+"-ans"+k] = 3;

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "പുരുഷൻ"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "is";
window[t+"-o2"+k] = "name";
window[t+"-o3"+k] = "man";
window[t+"-o4"+k] = "your";
window[t+"-ans"+k] = 3;

k++;
window[t+"-type"+k] = "image";
window[t+"-q"+k] = "Woman"; window[t+"-m"+k] = "eng/level2/woman.mp3"; //m is music
window[t+"-n"+k] = "woman"; window[t+"-n-m"+k] = "സ്ത്രീ"; //n means new words, n-m means new word's meaning
window[t+"-o1"+k] = "സ്ത്രീ"; window[t+"-l1-"+k] = "/level2/woman.png";
window[t+"-o2"+k] = "പെൺകുട്ടി"; window[t+"-l2-"+k] = "/level2/girl.png";
window[t+"-o3"+k] = "പുരുഷൻ"; window[t+"-l3-"+k] = "/level2/man.png";
window[t+"-o4"+k] = "വിദ്യാർത്ഥി"; window[t+"-l4-"+k] = "/level2/student.png";
window[t+"-ans"+k] = 1;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "He is a man"; window[t+"-m"+k] = "eng/level2/he-is-a-man.mp3"; //m is music
window[t+"-n"+k] = "he"; window[t+"-n-m"+k] = "അവൻ"; //n means new words, n-m means new word's meaning
window[t+"-l"+k] = 8; //how many options are there
window[t+"-o1"+k] = "പുരുഷൻ";
window[t+"-o2"+k] = "അവൻ്റെ";
window[t+"-o3"+k] = "ഞാൻ";
window[t+"-o4"+k] = "ആണ്";
window[t+"-o5"+k] = "ഒരു";
window[t+"-o6"+k] = "എന്ത്";
window[t+"-o7"+k] = "അവൻ";
window[t+"-o8"+k] = "എൻ്റെ";
window[t+"-ans"+k] = [7,5,1,4];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "He is a boy"; window[t+"-m"+k] = "eng/level2/he-is-a-boy.mp3"; //m is music
window[t+"-l"+k] = 8; //how many options are there
window[t+"-o1"+k] = "ആൺകുട്ടി";
window[t+"-o2"+k] = "അവൻ്റെ";
window[t+"-o3"+k] = "ഞാൻ";
window[t+"-o4"+k] = "ആണ്";
window[t+"-o5"+k] = "ഒരു";
window[t+"-o6"+k] = "എന്ത്";
window[t+"-o7"+k] = "അവൻ";
window[t+"-o8"+k] = "എൻ്റെ";
window[t+"-ans"+k] = [7,5,1,4];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "She is a girl"; window[t+"-m"+k] = "eng/level2/she-is-a-girl.mp3"; //m is music
window[t+"-n"+k] = "she"; window[t+"-n-m"+k] = "അവൾ"; //n means new words, n-m means new word's meaning
window[t+"-l"+k] = 8; //how many options are there
window[t+"-o1"+k] = "ആൺകുട്ടി";
window[t+"-o2"+k] = "അവൻ്റെ";
window[t+"-o3"+k] = "ഞാൻ";
window[t+"-o4"+k] = "ആണ്";
window[t+"-o5"+k] = "ഒരു";
window[t+"-o6"+k] = "എന്ത്";
window[t+"-o7"+k] = "അവൾ";
window[t+"-o8"+k] = "പെൺകുട്ടി";
window[t+"-ans"+k] = [7,5,8,4];

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "അവൾ"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "she";
window[t+"-o2"+k] = "what";
window[t+"-o3"+k] = "student";
window[t+"-o4"+k] = "your";
window[t+"-ans"+k] = 1;

k++;
window[t+"-type"+k] = "match";
window[t+"-l"+k] = 5; //how many options are there
window[t+"-o-l-1"+k] = "ആണ്"; window[t+"-o-r-1"+k] = "are";
window[t+"-o-l-2"+k] = "കാർ"; window[t+"-o-r-2"+k] = "car";
window[t+"-o-l-3"+k] = "അവൾ"; window[t+"-o-r-3"+k] = "she";
window[t+"-o-l-4"+k] = "ചായ"; window[t+"-o-r-4"+k] = "tea";
window[t+"-o-l-5"+k] = "വെള്ളം"; window[t+"-o-r-5"+k] = "water";

k++;
window[t+"-type"+k] = "voice-mcq";
window[t+"-q"+k] = "eng/level1/hot-and-cold.mp3"; //file name
window[t+"-l"+k] = 7; //how many options are there
window[t+"-o1"+k] = "my";
window[t+"-o2"+k] = "hot";
window[t+"-o3"+k] = "cold";
window[t+"-o4"+k] = "her";
window[t+"-o5"+k] = "small";
window[t+"-o6"+k] = "and";
window[t+"-o7"+k] = "tea";
window[t+"-ans"+k] = [2,6,3];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "Hot tea"; window[t+"-m"+k] = "eng/level1/hot-tea.mp3"; //m is music
window[t+"-l"+k] = 6; //how many options are there
window[t+"-o1"+k] = "ചായ";
window[t+"-o2"+k] = "വെള്ളം";
window[t+"-o3"+k] = "എന്ത്";
window[t+"-o4"+k] = "നിങ്ങളുടെ";
window[t+"-o5"+k] = "ചൂട്";
window[t+"-o6"+k] = "തണുപ്പ്";
window[t+"-ans"+k] = [5,1];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "ചൂട് ചായ കൂടാതെ തണുത്ത വെള്ളം"; window[t+"-m"+k] = null; //m is music
window[t+"-l"+k] = 9; //how many options are there
window[t+"-o1"+k] = "your";
window[t+"-o2"+k] = "hot";
window[t+"-o3"+k] = "name";
window[t+"-o4"+k] = "tea";
window[t+"-o5"+k] = "big";
window[t+"-o6"+k] = "her";
window[t+"-o7"+k] = "water";
window[t+"-o8"+k] = "cold";
window[t+"-o9"+k] = "and";
window[t+"-ans"+k] = [2,4,9,8,7];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "ചൂട് കൂടാതെ തണുപ്പ്"; window[t+"-m"+k] = null; //m is music
window[t+"-l"+k] = 7; //how many options are there
window[t+"-o1"+k] = "her";
window[t+"-o2"+k] = "name";
window[t+"-o3"+k] = "hot";
window[t+"-o4"+k] = "my";
window[t+"-o5"+k] = "and";
window[t+"-o6"+k] = "big";
window[t+"-o7"+k] = "cold";
window[t+"-ans"+k] = [3,5,7];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "എൻ്റെ ചായ ചൂട് ആണ്"; window[t+"-m"+k] = null; //m is music
window[t+"-l"+k] = 8; //how many options are there
window[t+"-o1"+k] = "tea";
window[t+"-o2"+k] = "house";
window[t+"-o3"+k] = "hot";
window[t+"-o4"+k] = "is";
window[t+"-o5"+k] = "big";
window[t+"-o6"+k] = "car";
window[t+"-o7"+k] = "my";
window[t+"-o8"+k] = "his";
window[t+"-ans"+k] = [7,1,4,3];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "നിങ്ങളുടെ കാർ കൂടാതെ എൻ്റെ വീട്"; window[t+"-m"+k] = null; //m is music
window[t+"-l"+k] = 9; //how many options are there
window[t+"-o1"+k] = "house";
window[t+"-o2"+k] = "car";
window[t+"-o3"+k] = "his";
window[t+"-o4"+k] = "my";
window[t+"-o5"+k] = "and";
window[t+"-o6"+k] = "her";
window[t+"-o7"+k] = "cold";
window[t+"-o8"+k] = "tea";
window[t+"-o9"+k] = "your";
window[t+"-ans"+k] = [9,2,5,4,1];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "Her tea is hot"; window[t+"-m"+k] = "eng/level1/her-tea-is-hot.mp3"; //m is music
window[t+"-l"+k] = 7; //how many options are there
window[t+"-o1"+k] = "ആണ്";
window[t+"-o2"+k] = "ചായ";
window[t+"-o3"+k] = "ചൂട്";
window[t+"-o4"+k] = "കാർ";
window[t+"-o5"+k] = "ആമിർ";
window[t+"-o6"+k] = "അവളുടെ";
window[t+"-o7"+k] = "വെള്ളം";
window[t+"-ans"+k] = [6,2,3,1];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "What is her name?"; window[t+"-m"+k] = "eng/level1/what-is-her-name.mp3"; //m is music
window[t+"-l"+k] = 6; //how many options are there
window[t+"-o1"+k] = "എന്ത്";
window[t+"-o2"+k] = "ചെറുത്";
window[t+"-o3"+k] = "ചൂട്";
window[t+"-o4"+k] = "അവളുടെ";
window[t+"-o5"+k] = "ആണ്";
window[t+"-o6"+k] = "പേര്";
window[t+"-ans"+k] = [4,6,1,5];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "His tea is cold"; window[t+"-m"+k] = "eng/level1/his-tea-is-cold.mp3"; //m is music
window[t+"-l"+k] = 8; //how many options are there
window[t+"-o1"+k] = "എന്ത്";
window[t+"-o2"+k] = "ആണ്";
window[t+"-o3"+k] = "അവൻ്റെ";
window[t+"-o4"+k] = "ചോദിച്ചു";
window[t+"-o5"+k] = "തണുപ്പ്";
window[t+"-o6"+k] = "ചായ";
window[t+"-o7"+k] = "കാർ";
window[t+"-o8"+k] = "പേര്";
window[t+"-ans"+k] = [3,6,5,2];

k++;
window[t+"-type"+k] = "match";
window[t+"-l"+k] = 5; //how many options are there
window[t+"-o-l-1"+k] = "ആണ്"; window[t+"-o-r-1"+k] = "is";
window[t+"-o-l-2"+k] = "വെള്ളം"; window[t+"-o-r-2"+k] = "water";
window[t+"-o-l-3"+k] = "വലുത്"; window[t+"-o-r-3"+k] = "big";
window[t+"-o-l-4"+k] = "പേര്"; window[t+"-o-r-4"+k] = "name";
window[t+"-o-l-5"+k] = "വീട്"; window[t+"-o-r-5"+k] = "house";

k++;
window[t+"-type"+k] = "voice-mcq";
window[t+"-q"+k] = "eng/level1/his-name-is-john.mp3"; //file name
window[t+"-l"+k] = 8; //how many options are there
window[t+"-o1"+k] = "his";
window[t+"-o2"+k] = "john";
window[t+"-o3"+k] = "car";
window[t+"-o4"+k] = "small";
window[t+"-o5"+k] = "is";
window[t+"-o6"+k] = "my";
window[t+"-o7"+k] = "house";
window[t+"-o8"+k] = "name";
window[t+"-ans"+k] = [1,8,5,2];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "അവൻ്റെ പേര്"; window[t+"-m"+k] = null; //m is music
window[t+"-l"+k] = 6; //how many options are there
window[t+"-o1"+k] = "name";
window[t+"-o2"+k] = "his";
window[t+"-o3"+k] = "water";
window[t+"-o4"+k] = "house";
window[t+"-o5"+k] = "small";
window[t+"-o6"+k] = "hot";
window[t+"-ans"+k] = [2,1];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "അവളുടെ ചായ തണുത്തത് ആണ്"; window[t+"-m"+k] = null; //m is music
window[t+"-l"+k] = 8; //how many options are there
window[t+"-o1"+k] = "name";
window[t+"-o2"+k] = "tea";
window[t+"-o3"+k] = "her";
window[t+"-o4"+k] = "small";
window[t+"-o5"+k] = "is";
window[t+"-o6"+k] = "cold";
window[t+"-o7"+k] = "car";
window[t+"-o8"+k] = "your";
window[t+"-ans"+k] = [3,2,5,6];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "അവൻ്റെ പേര് ജോൺ ആണ്"; window[t+"-m"+k] = null; //m is music
window[t+"-l"+k] = 8; //how many options are there
window[t+"-o1"+k] = "name";
window[t+"-o2"+k] = "tea";
window[t+"-o3"+k] = "his";
window[t+"-o4"+k] = "small";
window[t+"-o5"+k] = "is";
window[t+"-o6"+k] = "cold";
window[t+"-o7"+k] = "car";
window[t+"-o8"+k] = "john";
window[t+"-ans"+k] = [3,1,5,8];

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "വീട്"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "car";
window[t+"-o2"+k] = "house";
window[t+"-o3"+k] = "is";
window[t+"-o4"+k] = "name";
window[t+"-ans"+k] = 2;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "What is her name"; window[t+"-m"+k] = "eng/level1/what-is-her-name.mp3"; //m is music
window[t+"-l"+k] = 7; //how many options are there
window[t+"-o1"+k] = "വലുത്";
window[t+"-o2"+k] = "അവളുടെ";
window[t+"-o3"+k] = "ചായ";
window[t+"-o4"+k] = "പേര്";
window[t+"-o5"+k] = "എന്ത്";
window[t+"-o6"+k] = "ആണ്";
window[t+"-o7"+k] = "വീട്";
window[t+"-ans"+k] = [2,4,5,6];

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "കാർ"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "is";
window[t+"-o2"+k] = "your";
window[t+"-o3"+k] = "car";
window[t+"-o4"+k] = "name";
window[t+"-ans"+k] = 3;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "Your water is hot"; window[t+"-m"+k] = "eng/level1/your-water-is-hot.mp3"; //m is music
window[t+"-l"+k] = 7; //how many options are there
window[t+"-o1"+k] = "നിങ്ങളുടെ";
window[t+"-o2"+k] = "അവൻ്റെ";
window[t+"-o3"+k] = "ചായ";
window[t+"-o4"+k] = "പേര്";
window[t+"-o5"+k] = "വെള്ളം";
window[t+"-o6"+k] = "ആണ്";
window[t+"-o7"+k] = "ചൂട്";
window[t+"-ans"+k] = [1,5,7,6];

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "എൻ്റെ"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "is";
window[t+"-o2"+k] = "your";
window[t+"-o3"+k] = "car";
window[t+"-o4"+k] = "my";
window[t+"-ans"+k] = 4;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "What is his name"; window[t+"-m"+k] = "eng/level1/what-is-his-name.mp3"; //m is music
window[t+"-l"+k] = 7; //how many options are there
window[t+"-o1"+k] = "വലുത്";
window[t+"-o2"+k] = "അവൻ്റെ";
window[t+"-o3"+k] = "ചായ";
window[t+"-o4"+k] = "പേര്";
window[t+"-o5"+k] = "എന്ത്";
window[t+"-o6"+k] = "ആണ്";
window[t+"-o7"+k] = "വീട്";
window[t+"-ans"+k] = [2,4,5,6];

k++;
window[t+"-type"+k] = "voice-mcq";
window[t+"-q"+k] = "eng/level1/my-house-is-small.mp3"; //file name
window[t+"-l"+k] = 7; //how many options are there
window[t+"-o1"+k] = "my";
window[t+"-o2"+k] = "hot";
window[t+"-o3"+k] = "house";
window[t+"-o4"+k] = "her";
window[t+"-o5"+k] = "small";
window[t+"-o6"+k] = "and";
window[t+"-o7"+k] = "is";
window[t+"-ans"+k] = [1,3,7,5];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "Your car and my house"; window[t+"-m"+k] = "eng/level1/your-car-and-my-house.mp3"; //m is music
window[t+"-l"+k] = 8; //how many options are there
window[t+"-o1"+k] = "ചെറുത്";
window[t+"-o2"+k] = "എൻ്റെ";
window[t+"-o3"+k] = "എന്ത്";
window[t+"-o4"+k] = "കാർ";
window[t+"-o5"+k] = "ആണ്";
window[t+"-o6"+k] = "നിങ്ങളുടെ";
window[t+"-o7"+k] = "വീട്";
window[t+"-o8"+k] = "കൂടാതെ";
window[t+"-ans"+k] = [6,4,8,2,7];

k++;
window[t+"-type"+k] = "voice-mcq";
window[t+"-q"+k] = "eng/level1/his-tea-is-cold.mp3"; //file name
window[t+"-l"+k] = 7; //how many options are there
window[t+"-o1"+k] = "my";
window[t+"-o2"+k] = "hot";
window[t+"-o3"+k] = "tea";
window[t+"-o4"+k] = "his";
window[t+"-o5"+k] = "cold";
window[t+"-o6"+k] = "and";
window[t+"-o7"+k] = "is";
window[t+"-ans"+k] = [4,3,7,5];

k++;
window[t+"-type"+k] = "message";
window[t+"-ti"+k] = "പഠിച്ച വാക്കുകൾ"; //title
window[t+"-msg"+k] = "Let see what you have learned so far."; //message

k++;
window[t+"-type"+k] = "conversation"; xt=0;
xt++;window[t+"-q"+xt+"-l"+k] = "from"; window[t+"-t"+xt+"-l"+k] = "നിന്ന്"; window[t+"-q"+xt+"-m"+k] = 'eng/level2/from.mp3'; //l=left,r=right q=ques,t=translated, m=music
xt++;window[t+"-q"+xt+"-l"+k] = "delhi"; window[t+"-t"+xt+"-l"+k] = "ഡൽഹി"; window[t+"-q"+xt+"-m"+k] = 'eng/level2/delhi.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "you"; window[t+"-t"+xt+"-l"+k] = "നിങ്ങൾ/നീ"; window[t+"-q"+xt+"-m"+k] = 'eng/level2/you.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "are"; window[t+"-t"+xt+"-l"+k] = "ആണ്"; window[t+"-q"+xt+"-m"+k] = 'eng/level2/are.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "and"; window[t+"-t"+xt+"-l"+k] = "കൂടാതെ"; window[t+"-q"+xt+"-m"+k] = 'eng/level2/and.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "happy"; window[t+"-t"+xt+"-l"+k] = "സന്തോഷം"; window[t+"-q"+xt+"-m"+k] = 'eng/level2/happy.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "man"; window[t+"-t"+xt+"-l"+k] = "പുരുഷൻ"; window[t+"-q"+xt+"-m"+k] = 'eng/level2/man.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "woman"; window[t+"-t"+xt+"-l"+k] = "സ്ത്രീ"; window[t+"-q"+xt+"-m"+k] = 'eng/level2/woman.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "he"; window[t+"-t"+xt+"-l"+k] = "അവൻ"; window[t+"-q"+xt+"-m"+k] = 'eng/level2/he.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "she"; window[t+"-t"+xt+"-l"+k] = "അവൾ"; window[t+"-q"+xt+"-m"+k] = 'eng/level2/she.mp3';
window[t+"-len"+k]=xt;

k++;
window[t+"-type"+k] = "message";
window[t+"-ti"+k] = "സംഭാഷണം"; //title
window[t+"-msg"+k] = "ലളിതമായ ഒരു സംഭാഷണത്തിലൂടെ നമുക്ക് അധ്യായങ്ങൾ പുനഃപരിശോധിക്കാം"; //message

k++;
window[t+"-type"+k] = "conversation"; xt=0;
xt++;window[t+"-q"+xt+"-l"+k] = "What is your name?"; window[t+"-t"+xt+"-l"+k] = "നിൻ്റെ പേര് എന്താണ്?"; window[t+"-q"+xt+"-m"+k] = 'eng/level3/what-is-your-name.mp3'; //l=left,r=right q=ques,t=translated, m=music
xt++;window[t+"-q"+xt+"-r"+k] = "My name is Ramesh."; window[t+"-t"+xt+"-r"+k] = "എൻ്റെ പേര് രമേഷ് ആണ്."; window[t+"-q"+xt+"-m"+k] = 'eng/level3/my-name-is-ramesh.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "Are you a student?"; window[t+"-t"+xt+"-l"+k] = "നിങ്ങൾ ഒരു വിദ്യാർത്ഥി ആണോ?"; window[t+"-q"+xt+"-m"+k] = 'eng/level3/are-you-a-student.mp3';
xt++;window[t+"-q"+xt+"-r"+k] = "No, I am not a student."; window[t+"-t"+xt+"-r"+k] = "അല്ല, ഞാൻ ഒരു വിദ്യാർത്ഥി അല്ല."; window[t+"-q"+xt+"-m"+k] = 'eng/level3/no-i-am-not-a-student.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "Are you from India?"; window[t+"-t"+xt+"-l"+k] = "നിങ്ങൾ ഇന്ത്യയിൽ നിന്ന് ആണോ?"; window[t+"-q"+xt+"-m"+k] = 'eng/level3/are-you-from-india.mp3';
xt++;window[t+"-q"+xt+"-r"+k] = "Yes, I am from India."; window[t+"-t"+xt+"-r"+k] = "അതെ, ഞാൻ ഇന്ത്യയിൽ നിന്ന് ആണ്."; window[t+"-q"+xt+"-m"+k] = 'eng/level3/yes-i-am-from-india.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "Are you sad?"; window[t+"-t"+xt+"-l"+k] = "നിങ്ങൾ ദുഃഖിതൻ ആണോ?"; window[t+"-q"+xt+"-m"+k] = 'eng/level3/are-you-sad.mp3';
xt++;window[t+"-q"+xt+"-r"+k] = "No, I am happy."; window[t+"-t"+xt+"-r"+k] = "അല്ല, ഞാൻ സന്തോഷവാന് ആണ്."; window[t+"-q"+xt+"-m"+k] = 'eng/level3/no-i-am-happy.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "My house is big."; window[t+"-t"+xt+"-l"+k] = "എൻ്റെ വീട് വലുത് ആണ്."; window[t+"-q"+xt+"-m"+k] = 'eng/level3/my-house-is-big.mp3';
xt++;window[t+"-q"+xt+"-r"+k] = "My car is small."; window[t+"-t"+xt+"-r"+k] = "എൻ്റെ കാർ ചെറുത് ആണ്."; window[t+"-q"+xt+"-m"+k] = 'eng/level3/my-car-is-small.mp3';
window[t+"-len"+k]=xt;

lesson2Total = k;