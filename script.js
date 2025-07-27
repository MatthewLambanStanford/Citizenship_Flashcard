document.addEventListener('DOMContentLoaded', () => {
  // Your existing JS code here:

const flashcards = [
  {
    english: "What is the supreme law of the land?",
    tagalog: "Ano ang pinakamataas na batas ng bansa?",
    answer: "The Constitution"
  },
  {
    english: "What does the Constitution do?",
    tagalog: "Ano ang ginagawa ng Konstitusyon?",
    answer: "Sets up the government, defines the government, protects basic rights of Americans"
  },
  {
    english: "The idea of self-government is in the first three words of the Constitution. What are these words?",
    tagalog: "Ang ideya ng sariling pamahalaan ay nasa unang tatlong salita ng Konstitusyon. Ano ang mga salitang ito?",
    answer: "We the People"
  },
  {
    english: "What is an amendment?",
    tagalog: "Ano ang isang susog?",
    answer: "A change or addition to the Constitution"
  },
  {
    english: "What do we call the first ten amendments to the Constitution?",
    tagalog: "Ano ang tawag sa unang sampung susog sa Konstitusyon?",
    answer: "The Bill of Rights"
  },
  {
    english: "What is one right or freedom from the First Amendment?",
    tagalog: "Ano ang isang karapatan o kalayaan mula sa Unang Susog?",
    answer: "Speech, religion, assembly, press, petition the government"
  },
  {
    english: "How many amendments does the Constitution have?",
    tagalog: "Ilang susog mayroon ang Konstitusyon?",
    answer: "27"
  },
  {
    english: "What did the Declaration of Independence do?",
    tagalog: "Ano ang ginawa ng Deklarasyon ng Kalayaan?",
    answer: "Announced our independence from Great Britain"
  },
  {
    english: "What are two rights in the Declaration of Independence?",
    tagalog: "Ano ang dalawang karapatan sa Deklarasyon ng Kalayaan?",
    answer: "Life, liberty, pursuit of happiness"
  },
  {
    english: "What is freedom of religion?",
    tagalog: "Ano ang kalayaan sa relihiyon?",
    answer: "You can practice any religion, or not practice a religion"
  },
  {
    english: "What is the economic system in the United States?",
    tagalog: "Ano ang sistemang pangkabuhayan sa Estados Unidos?",
    answer: "Capitalist economy, market economy"
  },
  {
    english: "What is the 'rule of law'?",
    tagalog: "Ano ang 'rule of law'?",
    answer: "Everyone must follow the law, no one is above the law"
  },
  {
    english: "Name one branch or part of the government.",
    tagalog: "Banggitin ang isang sangay o bahagi ng pamahalaan.",
    answer: "Congress, President, the courts"
  },
  {
    english: "What stops one branch of government from becoming too powerful?",
    tagalog: "Ano ang pumipigil sa isang sangay ng pamahalaan na maging masyadong makapangyarihan?",
    answer: "Checks and balances, separation of powers"
  },
  {
    english: "Who is in charge of the executive branch?",
    tagalog: "Sino ang namamahala sa ehekutibong sangay?",
    answer: "The President"
  },
  {
    english: "Who makes federal laws?",
    tagalog: "Sino ang gumagawa ng mga pederal na batas?",
    answer: "Congress"
  },
  {
    english: "What are the two parts of the U.S. Congress?",
    tagalog: "Ano ang dalawang bahagi ng Kongreso ng Estados Unidos?",
    answer: "Senate and House of Representatives"
  },
  {
    english: "How many U.S. Senators are there?",
    tagalog: "Ilang Senador ng Estados Unidos ang mayroon?",
    answer: "100"
  },
  {
    english: "We elect a U.S. Senator for how many years?",
    tagalog: "Ilang taon natin inihahalal ang isang Senador ng Estados Unidos?",
    answer: "6"
  },
  {
    english: "Who is one of your state's U.S. Senators now?",
    tagalog: "Sino ang isa sa mga kasalukuyang Senador ng Estados Unidos mula sa inyong estado?",
    answer: "(Answer varies by state)"
  },
  {
    english: "The House of Representatives has how many voting members?",
    tagalog: "Ilang botanteng miyembro mayroon ang Kapulungan ng mga Kinatawan?",
    answer: "435"
  },
  {
    english: "We elect a U.S. Representative for how many years?",
    tagalog: "Ilang taon natin inihahalal ang isang Kinatawan ng Estados Unidos?",
    answer: "2"
  },
  {
    english: "Name your U.S. Representative.",
    tagalog: "Banggitin ang inyong Kinatawan sa Estados Unidos.",
    answer: "(Answer varies by district)"
  },
  {
    english: "Who does a U.S. Senator represent?",
    tagalog: "Sino ang kinakatawan ng isang Senador ng Estados Unidos?",
    answer: "All people of the state"
  },
  {
    english: "Why do some states have more Representatives than other states?",
    tagalog: "Bakit may mga estado na mas maraming Kinatawan kaysa sa iba?",
    answer: "Because of the state's population"
  },
  {
    english: "We elect a President for how many years?",
    tagalog: "Ilang taon natin inihahalal ang isang Pangulo?",
    answer: "4"
  },
  {
    english: "In what month do we vote for President?",
    tagalog: "Sa anong buwan tayo bumoboto para sa Pangulo?",
    answer: "November"
  },
  {
    english: "What is the name of the President of the United States now?",
    tagalog: "Ano ang pangalan ng kasalukuyang Pangulo ng Estados Unidos?",
    answer: "Joe Biden"
  },
  {
    english: "What is the name of the Vice President of the United States now?",
    tagalog: "Ano ang pangalan ng kasalukuyang Pangalawang Pangulo ng Estados Unidos?",
    answer: "Kamala Harris"
  },
  {
    english: "If the President can no longer serve, who becomes President?",
    tagalog: "Kung hindi na maaaring maglingkod ang Pangulo, sino ang magiging Pangulo?",
    answer: "The Vice President"
  },
  {
    english: "If both the President and the Vice President can no longer serve, who becomes President?",
    tagalog: "Kung hindi na maaaring maglingkod ang Pangulo at Pangalawang Pangulo, sino ang magiging Pangulo?",
    answer: "The Speaker of the House"
  },
  {
    english: "Who is the Commander in Chief of the military?",
    tagalog: "Sino ang Commander in Chief ng militar?",
    answer: "The President"
  },
  {
    english: "Who signs bills to become laws?",
    tagalog: "Sino ang pumipirma sa mga panukalang batas upang maging batas?",
    answer: "The President"
  },
  {
    english: "Who vetoes bills?",
    tagalog: "Sino ang nagve-veto ng mga panukalang batas?",
    answer: "The President"
  },
  {
    english: "What does the President's Cabinet do?",
    tagalog: "Ano ang ginagawa ng Gabinete ng Pangulo?",
    answer: "Advises the President"
  },
  {
    english: "What are two Cabinet-level positions?",
    tagalog: "Ano ang dalawang posisyon sa antas ng Gabinete?",
    answer: "Secretary of Defense, Secretary of Education"
  },
  {
    english: "What does the judicial branch do?",
    tagalog: "Ano ang ginagawa ng hudikaturang sangay?",
    answer: "Reviews laws, explains laws, resolves disputes"
  },
  {
    english: "What is the highest court in the United States?",
    tagalog: "Ano ang pinakamataas na hukuman sa Estados Unidos?",
    answer: "The Supreme Court"
  },
  {
    english: "How many justices are on the Supreme Court?",
    tagalog: "Ilang mahistrado mayroon sa Korte Suprema?",
    answer: "9"
  },
  {
    english: "Who is the Chief Justice of the United States now?",
    tagalog: "Sino ang kasalukuyang Punong Mahistrado ng Estados Unidos?",
    answer: "John Roberts"
  },
  {
    english: "Under our Constitution, some powers belong to the federal government. What is one power of the federal government?",
    tagalog: "Sa ilalim ng ating Konstitusyon, ang ilang kapangyarihan ay nabibilang sa pamahalaang pederal. Ano ang isang kapangyarihan ng pamahalaang pederal?",
    answer: "To print money, to declare war"
  },
  {
    english: "Under our Constitution, some powers belong to the states. What is one power of the states?",
    tagalog: "Sa ilalim ng ating Konstitusyon, ang ilang kapangyarihan ay nabibilang sa mga estado. Ano ang isang kapangyarihan ng mga estado?",
    answer: "Provide schooling and education"
  },
  {
    english: "Who is the Governor of your state now?",
    tagalog: "Sino ang kasalukuyang Gobernador ng inyong estado?",
    answer: "(Answer varies by state)"
  },
  {
    english: "What is the capital of your state?",
    tagalog: "Ano ang kabisera ng inyong estado?",
    answer: "(Answer varies by state)"
  },
  {
    english: "What are the two major political parties in the United States?",
    tagalog: "Ano ang dalawang pangunahing partidong pampulitika sa Estados Unidos?",
    answer: "Democratic and Republican"
  },
  {
    english: "What is the political party of the President now?",
    tagalog: "Ano ang kasalukuyang partidong pampulitika ng Pangulo?",
    answer: "Democratic Party"
  },
  {
    english: "What is the name of the Speaker of the House of Representatives now?",
    tagalog: "Ano ang pangalan ng kasalukuyang Speaker ng Kapulungan ng mga Kinatawan?",
    answer: "Mike Johnson"
  },
  {
    english: "There are four amendments to the Constitution about who can vote. Describe one of them.",
    tagalog: "May apat na susog sa Konstitusyon tungkol sa kung sino ang maaaring bumoto. Ilarawan ang isa sa mga ito.",
    answer: "Citizens 18 and older can vote"
  },
  {
    english: "What is one responsibility that is only for United States citizens?",
    tagalog: "Ano ang isang responsibilidad na para lamang sa mga mamamayan ng Estados Unidos?",
    answer: "Serve on a jury, vote in a federal election"
  },
  {
    english: "Name one right only for United States citizens.",
    tagalog: "Banggitin ang isang karapatan na para lamang sa mga mamamayan ng Estados Unidos.",
    answer: "Vote in a federal election"
  },
  {
    english: "What are two rights of everyone living in the United States?",
    tagalog: "Ano ang dalawang karapatan ng bawat taong naninirahan sa Estados Unidos?",
    answer: "Freedom of speech, freedom of religion"
  },
  {
    english: "What do we show loyalty to when we say the Pledge of Allegiance?",
    tagalog: "Ano ang ipinapakita nating katapatan kapag sinasabi natin ang Panunumpa ng Katapatan?",
    answer: "The United States, the flag"
  },
  {
    english: "What is one promise you make when you become a United States citizen?",
    tagalog: "Ano ang isang pangako na ginagawa mo kapag naging mamamayan ka ng Estados Unidos?",
    answer: "Give up loyalty to other countries"
  },
  {
    english: "How old do citizens have to be to vote for President?",
    tagalog: "Ilang taon dapat ang mga mamamayan upang makaboto para sa Pangulo?",
    answer: "18 and older"
  },
  {
    english: "What are two ways that Americans can participate in their democracy?",
    tagalog: "Ano ang dalawang paraan kung paano makikilahok ang mga Amerikano sa kanilang demokrasya?",
    answer: "Vote, join a political party"
  },
  {
    english: "When is the last day you can send in federal income tax forms?",
    tagalog: "Kailan ang huling araw na maaari kang magsumite ng mga pormularyo ng buwis sa pederal na kita?",
    answer: "April 15"
  },
  {
    english: "When must all men register for the Selective Service?",
    tagalog: "Kailan dapat magparehistro ang lahat ng lalaki para sa Selective Service?",
    answer: "At age 18"
  },
  {
    english: "What is one reason colonists came to America?",
    tagalog: "Ano ang isang dahilan kung bakit dumating ang mga kolonista sa Amerika?",
    answer: "Freedom, political liberty"
  },
  {
    english: "Who lived in America before the Europeans arrived?",
    tagalog: "Sino ang nanirahan sa Amerika bago dumating ang mga Europeo?",
    answer: "Native Americans"
  },
  {
    english: "What group of people was taken to America and sold as slaves?",
    tagalog: "Anong grupo ng mga tao ang dinala sa Amerika at ipinagbili bilang mga alipin?",
    answer: "Africans"
  },
  {
    english: "Why did the colonists fight the British?",
    tagalog: "Bakit nakipaglaban ang mga kolonista sa mga British?",
    answer: "Because of high taxes"
  },
  {
    english: "Who wrote the Declaration of Independence?",
    tagalog: "Sino ang sumulat ng Deklarasyon ng Kalayaan?",
    answer: "Thomas Jefferson"
  },
  {
    english: "When was the Declaration of Independence adopted?",
    tagalog: "Kailan pinagtibay ang Deklarasyon ng Kalayaan?",
    answer: "July 4, 1776"
  },
  {
    english: "There were 13 original states. Name three.",
    tagalog: "May 13 orihinal na estado. Banggitin ang tatlo.",
    answer: "New York, New Jersey, Virginia"
  },
  {
    english: "What happened at the Constitutional Convention?",
    tagalog: "Ano ang nangyari sa Constitutional Convention?",
    answer: "The Constitution was written"
  },
  {
    english: "When was the Constitution written?",
    tagalog: "Kailan isinulat ang Konstitusyon?",
    answer: "1787"
  },
  {
    english: "The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers.",
    tagalog: "Ang Federalist Papers ay sumuporta sa pagpasa ng Konstitusyon ng Estados Unidos. Banggitin ang isa sa mga manunulat.",
    answer: "James Madison"
  },
  {
    english: "What is one thing Benjamin Franklin is famous for?",
    tagalog: "Ano ang isang bagay na kilala si Benjamin Franklin?",
    answer: "U.S. diplomat"
  },
  {
    english: "Who is the 'Father of Our Country'?",
    tagalog: "Sino ang 'Ama ng Ating Bansa'?",
    answer: "George Washington"
  },
  {
    english: "Who was the first President?",
    tagalog: "Sino ang unang Pangulo?",
    answer: "George Washington"
  },
  {
    english: "What territory did the United States buy from France in 1803?",
    tagalog: "Anong teritoryo ang binili ng Estados Unidos mula sa Pransya noong 1803?",
    answer: "Louisiana"
  },
  {
    english: "Name one war fought by the United States in the 1800s.",
    tagalog: "Banggitin ang isang digmaang nilabanan ng Estados Unidos noong 1800s.",
    answer: "Civil War"
  },
  {
    english: "Name the U.S. war between the North and the South.",
    tagalog: "Banggitin ang digmaan ng Estados Unidos sa pagitan ng Hilaga at Timog.",
    answer: "Civil War"
  },
  {
    english: "Name one problem that led to the Civil War.",
    tagalog: "Banggitin ang isang problemang nagdulot ng Digmaang Sibil.",
    answer: "Slavery"
  },
  {
    english: "What was one important thing that Abraham Lincoln did?",
    tagalog: "Ano ang isang mahalagang bagay na ginawa ni Abraham Lincoln?",
    answer: "Freed the slaves"
  },
  {
    english: "What did the Emancipation Proclamation do?",
    tagalog: "Ano ang ginawa ng Proklamasyon ng Emansipasyon?",
    answer: "Freed the slaves"
  },
  {
    english: "What did Susan B. Anthony do?",
    tagalog: "Ano ang ginawa ni Susan B. Anthony?",
    answer: "Fought for women's rights"
  },
  {
    english: "Name one war fought by the United States in the 1900s.",
    tagalog: "Banggitin ang isang digmaang nilabanan ng Estados Unidos noong 1900s.",
    answer: "World War II"
  },
  {
    english: "Who was President during World War I?",
    tagalog: "Sino ang Pangulo noong Unang Digmaang Pandaigdig?",
    answer: "Woodrow Wilson"
  },
  {
    english: "Who was President during the Great Depression and World War II?",
    tagalog: "Sino ang Pangulo noong Great Depression at Ikalawang Digmaang Pandaigdig?",
    answer: "Franklin Roosevelt"
  },
  {
    english: "Who did the United States fight in World War II?",
    tagalog: "Sino ang kalaban ng Estados Unidos sa Ikalawang Digmaang Pandaigdig?",
    answer: "Japan, Germany, and Italy"
  },
  {
    english: "Before he was President, Eisenhower was a general. What war was he in?",
    tagalog: "Bago siya naging Pangulo, si Eisenhower ay isang heneral. Sa anong digmaan siya nakibahagi?",
    answer: "World War II"
  },
  {
    english: "During the Cold War, what was the main concern of the United States?",
    tagalog: "Noong Cold War, ano ang pangunahing alalahanin ng Estados Unidos?",
    answer: "Communism"
  },
  {
    english: "What movement tried to end racial discrimination?",
    tagalog: "Anong kilusan ang nagtangkang wakasan ang diskriminasyon sa lahi?",
    answer: "Civil rights movement"
  },
  {
    english: "What did Martin Luther King, Jr. do?",
    tagalog: "Ano ang ginawa ni Martin Luther King, Jr.?",
    answer: "Fought for civil rights"
  },
  {
    english: "What major event happened on September 11, 2001, in the United States?",
    tagalog: "Anong pangunahing pangyayari ang naganap noong Setyembre 11, 2001 sa Estados Unidos?",
    answer: "Terrorists attacked the United States"
  },
  {
    english: "Name one American Indian tribe in the United States.",
    tagalog: "Banggitin ang isang tribong Amerikanong Indian sa Estados Unidos.",
    answer: "Cherokee"
  },
  {
    english: "Name one of the two longest rivers in the United States.",
    tagalog: "Banggitin ang isa sa dalawang pinakamahabang ilog sa Estados Unidos.",
    answer: "Mississippi River"
  },
  {
    english: "What ocean is on the West Coast of the United States?",
    tagalog: "Anong karagatan ang nasa Kanlurang Baybayin ng Estados Unidos?",
    answer: "Pacific Ocean"
  },
  {
    english: "What ocean is on the East Coast of the United States?",
    tagalog: "Anong karagatan ang nasa Silangang Baybayin ng Estados Unidos?",
    answer: "Atlantic Ocean"
  },
  {
    english: "Name one U.S. territory.",
    tagalog: "Banggitin ang isang teritoryo ng Estados Unidos.",
    answer: "Puerto Rico"
  },
  {
    english: "Name one state that borders Canada.",
    tagalog: "Banggitin ang isang estado na katabi ng Canada.",
    answer: "New York"
  },
  {
    english: "Name one state that borders Mexico.",
    tagalog: "Banggitin ang isang estado na katabi ng Mexico.",
    answer: "California"
  },
  {
    english: "What is the capital of the United States?",
    tagalog: "Ano ang kabisera ng Estados Unidos?",
    answer: "Washington, D.C."
  },
  {
    english: "Where is the Statue of Liberty?",
    tagalog: "Saan matatagpuan ang Statue of Liberty?",
    answer: "New York Harbor"
  },
  {
    english: "Why does the flag have 13 stripes?",
    tagalog: "Bakit may 13 guhit ang bandila?",
    answer: "Because there were 13 original colonies"
  },
  {
    english: "Why does the flag have 50 stars?",
    tagalog: "Bakit may 50 bituin ang bandila?",
    answer: "Because there is one star for each state"
  },
  {
    english: "What is the name of the national anthem?",
    tagalog: "Ano ang pangalan ng pambansang awit?",
    answer: "The Star-Spangled Banner"
  },
  {
    english: "When do we celebrate Independence Day?",
    tagalog: "Kailan natin ipinagdiriwang ang Araw ng Kalayaan?",
    answer: "July 4"
  },
  {
    english: "Name two national U.S. holidays.",
    tagalog: "Banggitin ang dalawang pambansang piyesta ng Estados Unidos.",
    answer: "Independence Day, Thanksgiving"
  }
];


let currentIndex = -1;
  const totalCount = flashcards.length;

  // DOM elements
  const counterElem = document.getElementById('counter');
  const flashcardElem = document.getElementById('flashcard');
  const answerElem = document.getElementById('answer');
  const nextBtn = document.getElementById('nextBtn');
  const backBtn = document.getElementById('backBtn');
  const revealBtn = document.getElementById('revealBtn');
  const languageSelect = document.getElementById('languageSelect');

  let currentLanguage = languageSelect.value;

  function updateCounter() {
    if (currentIndex === -1) {
      counterElem.textContent = `0/${totalCount}`;
    } else {
      counterElem.textContent = `${currentIndex + 1}/${totalCount}`;
    }
  }

  function showFlashcard() {
    if (currentIndex < 0 || currentIndex >= totalCount) {
      flashcardElem.textContent = "Press Next to start!";
      answerElem.textContent = '';
      answerElem.classList.add('hidden');
      revealBtn.classList.add('hidden');
      return;
    }
    const card = flashcards[currentIndex];
    flashcardElem.textContent = card[currentLanguage];
    answerElem.textContent = '';
    answerElem.classList.add('hidden');
    revealBtn.classList.remove('hidden');
  }

  function updateButtons() {
    backBtn.disabled = currentIndex <= 0;
    nextBtn.disabled = currentIndex >= totalCount - 1;
  }

  nextBtn.addEventListener('click', () => {
    if (currentIndex < totalCount - 1) {
      currentIndex++;
      showFlashcard();
      updateCounter();
      updateButtons();
    }
  });

  backBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      showFlashcard();
      updateCounter();
      updateButtons();
    }
  });

  revealBtn.addEventListener('click', () => {
    if (currentIndex >= 0 && currentIndex < totalCount) {
      answerElem.textContent = flashcards[currentIndex].answer;
      answerElem.classList.remove('hidden');
      revealBtn.classList.add('hidden');
    }
  });

  languageSelect.addEventListener('change', () => {
    currentLanguage = languageSelect.value;
    currentIndex = -1; // reset flashcards on language switch
    updateCounter();
    showFlashcard();
    updateButtons();
  });

  // Initialize display
  updateCounter();
  showFlashcard();
  updateButtons();
});