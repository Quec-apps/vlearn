k=0;t='a';

k++;
window[t+"-type"+k] = "message";
window[t+"-ti"+k] = "സംഭാഷണം"; //title
window[t+"-msg"+k] = "ഒരു ഉപഭോക്താവ് ബാങ്ക് അക്കൗണ്ട് തുറക്കാൻ ബാങ്കിൽ വന്നു"; //message

k++;
window[t+"-type"+k] = "conversation"; xt=0;
xt++;window[t+"-q"+xt+"-l"+k] = "How are you doing today?"; window[t+"-t"+xt+"-l"+k] = "ഇന്ന് നിങ്ങൾക്ക് എങ്ങനെയുണ്ട്?"; window[t+"-q"+xt+"-m"+k] = 'eng/s2/unit3/how-are-you-doing-today.mp3'; //l=left,r=right q=ques,t=translated, m=music
xt++;window[t+"-q"+xt+"-r"+k] = "Great. Thanks."; window[t+"-t"+xt+"-r"+k] = "കൊള്ളാം. നന്ദി."; window[t+"-q"+xt+"-m"+k] = 'eng/s2/unit3/great-thanks.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "What can I help you with?"; window[t+"-t"+xt+"-l"+k] = "എനിക്ക് നിങ്ങളെ എന്ത് സഹായിക്കാനാകും?"; window[t+"-q"+xt+"-m"+k] = 'eng/s2/unit3/what-can-i-help-you-with.mp3';
xt++;window[t+"-q"+xt+"-r"+k] = "I would like to open a bank account."; window[t+"-t"+xt+"-r"+k] = "ഞാൻ ഒരു ബാങ്ക് അക്കൗണ്ട് തുറക്കാൻ ആഗ്രഹിക്കുന്നു."; window[t+"-q"+xt+"-m"+k] = 'eng/s2/unit3/i-would-like-to-open-a-bank-account.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "What kind of account would you like to open?"; window[t+"-t"+xt+"-l"+k] = "ഏത് തരത്തിലുള്ള അക്കൗണ്ട് തുറക്കാനാണ് നിങ്ങൾ ആഗ്രഹിക്കുന്നത്?"; window[t+"-q"+xt+"-m"+k] = 'eng/s2/unit3/what-kind-of-account-would-you-like-to-open.mp3';
xt++;window[t+"-q"+xt+"-r"+k] = "I need a savings account."; window[t+"-t"+xt+"-r"+k] = "എനിക്ക് ഒരു സേവിംഗ്സ് അക്കൗണ്ട് വേണം."; window[t+"-q"+xt+"-m"+k] = 'eng/s2/unit3/i-need-a-savings-account.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "In order to open these accounts, you need to deposit a minimum of $50."; window[t+"-t"+xt+"-l"+k] = "ഈ അക്കൗണ്ടുകൾ തുറക്കുന്നതിന്, നിങ്ങൾ കുറഞ്ഞത് $50 നിക്ഷേപിക്കേണ്ടതുണ്ട്."; window[t+"-q"+xt+"-m"+k] = 'eng/s2/unit3/in-order-to-open-these-accounts-you-need-to-deposit-a-minimum-of-50.mp3';
xt++;window[t+"-q"+xt+"-r"+k] = "I want to deposit $300."; window[t+"-t"+xt+"-r"+k] = "എനിക്ക് $300 നിക്ഷേപിക്കണം."; window[t+"-q"+xt+"-m"+k] = 'eng/s2/unit3/i-want-to-deposit-300.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "I will set up your account right now."; window[t+"-t"+xt+"-l"+k] = "ഞാൻ ഇപ്പോൾ തന്നെ നിങ്ങളുടെ അക്കൗണ്ട് സജ്ജീകരിക്കാം."; window[t+"-q"+xt+"-m"+k] = 'eng/s2/unit3/i-will-set-up-your-account-right-now.mp3';
window[t+"-len"+k]=xt;

k++;
window[t+"-type"+k] = "mcq2";
window[t+"-q"+k] = "How are you doing today?"; window[t+"-m"+k] = 'eng/s2/unit3/how-are-you-doing-today.mp3'; //m is music
window[t+"-ans"+k] = "ഇന്ന് നിങ്ങൾക്ക് എങ്ങനെയുണ്ട്?";
window[t+"-ans2"+k] = "നിങ്ങൾക്ക് ഇന്ന് എങ്ങനെയുണ്ട്?";

k++;
window[t+"-type"+k] = "mcq2";
window[t+"-q"+k] = "Great. Thanks."; window[t+"-m"+k] = 'eng/s2/unit3/great-thanks.mp3'; //m is music
window[t+"-ans"+k] = "കൊള്ളാം. നന്ദി.";

k++;
window[t+"-type"+k] = "mcq2";
window[t+"-q"+k] = "What can I help you with?"; window[t+"-m"+k] = 'eng/s2/unit3/what-can-i-help-you-with.mp3'; //m is music
window[t+"-ans"+k] = "എനിക്ക് നിങ്ങളെ എന്ത് സഹായിക്കാനാകും?";
window[t+"-ans2"+k] = "നിങ്ങളെ എനിക്ക് എന്ത് സഹായിക്കാനാകും?";

k++;
window[t+"-type"+k] = "opt_mcq";
window[t+"-q"+k] = "I would like to open a bank account."; window[t+"-m"+k] = 'eng/s2/unit3/i-would-like-to-open-a-bank-account.mp3'; //m is music
window[t+"-ans"+k] = "ഞാൻ ഒരു ബാങ്ക് അക്കൗണ്ട് തുറക്കാൻ ആഗ്രഹിക്കുന്നു.";

k++;
window[t+"-type"+k] = "opt_mcq";
window[t+"-q"+k] = "What kind of account would you like to open?"; window[t+"-m"+k] = 'eng/s2/unit3/what-kind-of-account-would-you-like-to-open.mp3'; //m is music
window[t+"-ans"+k] = "ഏത് തരത്തിലുള്ള അക്കൗണ്ട് തുറക്കാനാണ് നിങ്ങൾ ആഗ്രഹിക്കുന്നത്?";

k++;
window[t+"-type"+k] = "opt_mcq";
window[t+"-q"+k] = "I need a savings account."; window[t+"-m"+k] = 'eng/s2/unit3/i-need-a-savings-account.mp3'; //m is music
window[t+"-ans"+k] = "എനിക്ക് ഒരു സേവിംഗ്സ് അക്കൗണ്ട് വേണം.";

k++;
window[t+"-type"+k] = "opt_mcq";
window[t+"-q"+k] = "In order to open these accounts, you need to deposit a minimum of $50."; window[t+"-m"+k] = 'eng/s2/unit3/in-order-to-open-these-accounts-you-need-to-deposit-a-minimum-of-50.mp3'; //m is music
window[t+"-ans"+k] = "ഈ അക്കൗണ്ടുകൾ തുറക്കുന്നതിന്, നിങ്ങൾ കുറഞ്ഞത് $50 നിക്ഷേപിക്കേണ്ടതുണ്ട്.";

k++;
window[t+"-type"+k] = "mcq2";
window[t+"-q"+k] = "I want to deposit $300."; window[t+"-m"+k] = 'eng/s2/unit3/i-want-to-deposit-300.mp3'; //m is music
window[t+"-ans"+k] = "എനിക്ക് $300 നിക്ഷേപിക്കണം.";
window[t+"-ans2"+k] = "$300 എനിക്ക് നിക്ഷേപിക്കണം.";

k++;
window[t+"-type"+k] = "opt_mcq";
window[t+"-q"+k] = "I will set up your account right now."; window[t+"-m"+k] = 'eng/s2/unit3/i-will-set-up-your-account-right-now.mp3'; //m is music
window[t+"-ans"+k] = "ഞാൻ ഇപ്പോൾ തന്നെ നിങ്ങളുടെ അക്കൗണ്ട് സജ്ജീകരിക്കാം.";

k++;
window[t+"-type"+k] = "message";
window[t+"-ti"+k] = "സംഭാഷണം"; //title
window[t+"-msg"+k] = "പഠിച്ച സംഭാഷണം പുനഃപരിശോധിക്കാം"; //message

k++;
window[t+"-type"+k] = "conversation"; xt=0;
xt++;window[t+"-q"+xt+"-l"+k] = "How are you doing today?"; window[t+"-t"+xt+"-l"+k] = "ഇന്ന് നിങ്ങൾക്ക് എങ്ങനെയുണ്ട്?"; window[t+"-q"+xt+"-m"+k] = 'eng/s2/unit3/how-are-you-doing-today.mp3'; //l=left,r=right q=ques,t=translated, m=music
xt++;window[t+"-q"+xt+"-r"+k] = "Great. Thanks."; window[t+"-t"+xt+"-r"+k] = "കൊള്ളാം. നന്ദി."; window[t+"-q"+xt+"-m"+k] = 'eng/s2/unit3/great-thanks.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "What can I help you with?"; window[t+"-t"+xt+"-l"+k] = "എനിക്ക് നിങ്ങളെ എന്ത് സഹായിക്കാനാകും?"; window[t+"-q"+xt+"-m"+k] = 'eng/s2/unit3/what-can-i-help-you-with.mp3';
xt++;window[t+"-q"+xt+"-r"+k] = "I would like to open a bank account."; window[t+"-t"+xt+"-r"+k] = "ഞാൻ ഒരു ബാങ്ക് അക്കൗണ്ട് തുറക്കാൻ ആഗ്രഹിക്കുന്നു."; window[t+"-q"+xt+"-m"+k] = 'eng/s2/unit3/i-would-like-to-open-a-bank-account.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "What kind of account would you like to open?"; window[t+"-t"+xt+"-l"+k] = "ഏത് തരത്തിലുള്ള അക്കൗണ്ട് തുറക്കാനാണ് നിങ്ങൾ ആഗ്രഹിക്കുന്നത്?"; window[t+"-q"+xt+"-m"+k] = 'eng/s2/unit3/what-kind-of-account-would-you-like-to-open.mp3';
xt++;window[t+"-q"+xt+"-r"+k] = "I need a savings account."; window[t+"-t"+xt+"-r"+k] = "എനിക്ക് ഒരു സേവിംഗ്സ് അക്കൗണ്ട് വേണം."; window[t+"-q"+xt+"-m"+k] = 'eng/s2/unit3/i-need-a-savings-account.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "In order to open these accounts, you need to deposit a minimum of $50."; window[t+"-t"+xt+"-l"+k] = "ഈ അക്കൗണ്ടുകൾ തുറക്കുന്നതിന്, നിങ്ങൾ കുറഞ്ഞത് $50 നിക്ഷേപിക്കേണ്ടതുണ്ട്."; window[t+"-q"+xt+"-m"+k] = 'eng/s2/unit3/in-order-to-open-these-accounts-you-need-to-deposit-a-minimum-of-50.mp3';
xt++;window[t+"-q"+xt+"-r"+k] = "I want to deposit $300."; window[t+"-t"+xt+"-r"+k] = "എനിക്ക് $300 നിക്ഷേപിക്കണം."; window[t+"-q"+xt+"-m"+k] = 'eng/s2/unit3/i-want-to-deposit-300.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "I will set up your account right now."; window[t+"-t"+xt+"-l"+k] = "ഞാൻ ഇപ്പോൾ തന്നെ നിങ്ങളുടെ അക്കൗണ്ട് സജ്ജീകരിക്കാം."; window[t+"-q"+xt+"-m"+k] = 'eng/s2/unit3/i-will-set-up-your-account-right-now.mp3';
window[t+"-len"+k]=xt;

lesson1Total = k;