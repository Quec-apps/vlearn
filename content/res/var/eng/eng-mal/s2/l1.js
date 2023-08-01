//Lesson1 [New Words]

k=0;t='a';

k++;
window[t+"-type"+k] = "message";
window[t+"-ti"+k] = "വലിയ വാക്യങ്ങൾ"; //title
window[t+"-msg"+k] = "ഈ വിഭാഗത്തിൽ നിങ്ങൾ വലിയ വാക്യങ്ങൾ പഠിക്കാൻ തുടങ്ങും"; //message

k++;
window[t+"-type"+k] = "message";
window[t+"-ti"+k] = "സംഭാഷണം"; //title
window[t+"-msg"+k] = "മരിയ എന്ന പെൺകുട്ടി മുറി റിസർവേഷൻ ചെയ്യാൻ ഒരു ഹോട്ടലിലേക്ക് വിളിക്കുന്നു"; //message

k++;
window[t+"-type"+k] = "conversation"; xt=0;
xt++;window[t+"-q"+xt+"-l"+k] = "I want to reserve a hotel room"; window[t+"-t"+xt+"-l"+k] = "എനിക്ക് ഒരു ഹോട്ടൽ മുറി റിസർവ് ചെയ്യണം"; window[t+"-q"+xt+"-m"+k] = 'eng/s2/unit1/i-want-to-reserve-a-hotel-room.mp3'; //l=left,r=right q=ques,t=translated, m=music
xt++;window[t+"-q"+xt+"-r"+k] = "May I have your full name?"; window[t+"-t"+xt+"-r"+k] = "എനിക്ക് നിങ്ങളുടെ മുഴുവൻ പേര് നൽകാമോ?"; window[t+"-q"+xt+"-m"+k] = 'eng/s2/unit1/may-i-have-your-full-name.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "My name is Mariya"; window[t+"-t"+xt+"-l"+k] = "എൻ്റെ പേര് മരിയ ആണ്"; window[t+"-q"+xt+"-m"+k] = 'eng/s2/unit1/my-name-is-mariya.mp3';
xt++;window[t+"-q"+xt+"-r"+k] = "What days do you need the reservation?"; window[t+"-t"+xt+"-r"+k] = "ഏത് ദിവസമാണ് നിങ്ങൾക്ക് റിസർവേഷൻ വേണ്ടത്?"; window[t+"-q"+xt+"-m"+k] = 'eng/s2/unit1/what-days-do-you-need-the-reservation.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "I am planning to visit Kerala tomorrow"; window[t+"-t"+xt+"-l"+k] = "ഞാൻ നാളെ കേരളം സന്ദർശിക്കാൻ ഒരുങ്ങുകയാണ്"; window[t+"-q"+xt+"-m"+k] = 'eng/s2/unit1/i-am-planning-to-visit-kerala-tomorrow.mp3';
xt++;window[t+"-q"+xt+"-r"+k] = "Your reservation is confirmed. thank you for calling"; window[t+"-t"+xt+"-r"+k] = "നിങ്ങളുടെ റിസർവേഷൻ സ്ഥിരീകരിച്ചു. വിളിച്ചതിന് നന്ദി"; window[t+"-q"+xt+"-m"+k] = 'eng/s2/unit1/your-reservation-is-confirmed.mp3';
window[t+"-len"+k]=xt;

k++;
window[t+"-type"+k] = "opt_mcq";
window[t+"-q"+k] = "I want to reserve a hotel room"; window[t+"-m"+k] = 'eng/s2/unit1/i-want-to-reserve-a-hotel-room.mp3'; //m is music
window[t+"-ans"+k] = "എനിക്ക് ഒരു ഹോട്ടൽ മുറി റിസർവ് ചെയ്യണം";
window[t+"-ans2"+k] = "ഒരു ഹോട്ടൽ മുറി എനിക്ക് റിസർവ് ചെയ്യണം";

k++;
window[t+"-type"+k] = "opt_mcq";
window[t+"-q"+k] = "May I have your full name?"; window[t+"-m"+k] = 'eng/s2/unit1/may-i-have-your-full-name.mp3'; //m is music
window[t+"-ans"+k] = "എനിക്ക് നിങ്ങളുടെ മുഴുവൻ പേര് നൽകാമോ?";
window[t+"-ans2"+k] = "നിങ്ങളുടെ മുഴുവൻ പേര് എനിക്ക് നൽകാമോ?";

k++;
window[t+"-type"+k] = "mcq2";
window[t+"-q"+k] = "My name is Mariya"; window[t+"-m"+k] = 'eng/s2/unit1/my-name-is-mariya.mp3'; //m is music
window[t+"-ans"+k] = "എൻ്റെ പേര് മരിയ ആണ്";

k++;
window[t+"-type"+k] = "mcq2";
window[t+"-q"+k] = "What days do you need the reservation?"; window[t+"-m"+k] = 'eng/s2/unit1/what-days-do-you-need-the-reservation.mp3'; //m is music
window[t+"-ans"+k] = "ഏത് ദിവസമാണ് നിങ്ങൾക്ക് റിസർവേഷൻ വേണ്ടത്?";
window[t+"-ans2"+k] = "നിങ്ങൾക്ക് ഏത് ദിവസമാണ് റിസർവേഷൻ വേണ്ടത്?";

k++;
window[t+"-type"+k] = "opt_mcq";
window[t+"-q"+k] = "I am planning to visit Kerala tomorrow"; window[t+"-m"+k] = 'eng/s2/unit1/i-am-planning-to-visit-kerala-tomorrow.mp3'; //m is music
window[t+"-ans"+k] = "ഞാൻ നാളെ കേരളം സന്ദർശിക്കാൻ ഒരുങ്ങുകയാണ്";
// window[t+"-ans2"+k] = "നാളെ ഞാൻ കേരളം സന്ദർശിക്കാൻ ഒരുങ്ങുകയാണ്?";

k++;
window[t+"-type"+k] = "opt_mcq";
window[t+"-q"+k] = "Your reservation is confirmed. thank you for calling"; window[t+"-m"+k] = 'eng/s2/unit1/your-reservation-is-confirmed.mp3'; //m is music
window[t+"-ans"+k] = "നിങ്ങളുടെ റിസർവേഷൻ സ്ഥിരീകരിച്ചു. വിളിച്ചതിന് നന്ദി";

k++;
window[t+"-type"+k] = "message";
window[t+"-ti"+k] = "സംഭാഷണം"; //title
window[t+"-msg"+k] = "പഠിച്ച സംഭാഷണം പുനഃപരിശോധിക്കാം"; //message

k++;
window[t+"-type"+k] = "conversation"; xt=0;
xt++;window[t+"-q"+xt+"-l"+k] = "I want to reserve a hotel room"; window[t+"-t"+xt+"-l"+k] = "എനിക്ക് ഒരു ഹോട്ടൽ മുറി റിസർവ് ചെയ്യണം"; window[t+"-q"+xt+"-m"+k] = 'eng/s2/unit1/i-want-to-reserve-a-hotel-room.mp3'; //l=left,r=right q=ques,t=translated, m=music
xt++;window[t+"-q"+xt+"-r"+k] = "May I have your full name?"; window[t+"-t"+xt+"-r"+k] = "എനിക്ക് നിങ്ങളുടെ മുഴുവൻ പേര് നൽകാമോ?"; window[t+"-q"+xt+"-m"+k] = 'eng/s2/unit1/may-i-have-your-full-name.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "My name is Mariya"; window[t+"-t"+xt+"-l"+k] = "എൻ്റെ പേര് മരിയ ആണ്"; window[t+"-q"+xt+"-m"+k] = 'eng/s2/unit1/my-name-is-mariya.mp3';
xt++;window[t+"-q"+xt+"-r"+k] = "What days do you need the reservation?"; window[t+"-t"+xt+"-r"+k] = "ഏത് ദിവസമാണ് നിങ്ങൾക്ക് റിസർവേഷൻ വേണ്ടത്?"; window[t+"-q"+xt+"-m"+k] = 'eng/s2/unit1/what-days-do-you-need-the-reservation.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "I am planning to visit Kerala tomorrow"; window[t+"-t"+xt+"-l"+k] = "ഞാൻ നാളെ കേരളം സന്ദർശിക്കാൻ ഒരുങ്ങുകയാണ്"; window[t+"-q"+xt+"-m"+k] = 'eng/s2/unit1/i-am-planning-to-visit-kerala-tomorrow.mp3';
xt++;window[t+"-q"+xt+"-r"+k] = "Your reservation is confirmed. thank you for calling"; window[t+"-t"+xt+"-r"+k] = "നിങ്ങളുടെ റിസർവേഷൻ സ്ഥിരീകരിച്ചു. വിളിച്ചതിന് നന്ദി"; window[t+"-q"+xt+"-m"+k] = 'eng/s2/unit1/your-reservation-is-confirmed.mp3';
window[t+"-len"+k]=xt;

lesson1Total = k;