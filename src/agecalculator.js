export class AgeCalculator {
  constructor(birthday) {
    this.birthDate = new Date(birthday);
    this.currentDate = new Date();
  }

  getBirthDate() {
    return this.birthDate;
  }

  getEarthAge() {
    let age = this.currentDate.getFullYear() - this.birthDate.getFullYear();
    return age;
  }

  getMercuryAge() {
    return Math.floor(this.getEarthAge() * .24);
  }

  getVenusAge() {
    return Math.floor(this.getEarthAge() * .62);
  }

  getMarsAge() {
    return Math.floor(this.getEarthAge() * 1.88);
  }

  getJupiterAge() {
    return Math.floor(this.getEarthAge() * 11.86);
  }

  getLifeExpectancy(nationality = "", gender = "", smoker = false) {
    const nations = {};
    nations['MONACO'] = 89.40;
    nations['JAPAN'] = 85.30;
    nations['SINGAPORE'] =	85.20;
    nations['MACAU'] = 84.60;
    nations['SANMARINO'] = 83.30;
    nations['ICELAND'] = 83.10;
    nations['HONG KONG'] =	83.00;
    nations['ANDORRA'] =	82.90;
    nations['GUERNSEY'] =	82.60;
    nations['SWITZERLAND'] =	82.60;
    nations['SOUTH_KOREA'] =	82.50;
    nations['ISRAEL'] =	82.50;
    nations['LUXEMBOURG'] =	82.30;
  	nations['AUSTRALIA'] = 82.30;
  	nations['ITALY'] =	82.30;
  	nations['SWEDEN'] =	82.10;
  	nations['FRANCE'] =	81.90;
  	nations['NORWAY'] =	81.90;
  	nations['LIECHTENSTEIN'] = 81.90;
  	nations['JERSEY'] =	81.90;
  	nations['CANADA'] =	81.90;
  	nations['SPAIN'] =	81.80;
  	nations['AUSTRIA'] =	81.60;
  	nations['ANGUILLA'] =	81.50;
  	nations['NETHERLANDS'] = 81.40;
    nations['BERMUDA'] =	81.40;
    nations['NEW ZEALAND'] =	81.30;
  	nations['CAYMAN ISLANDS'] =	81.30;
  	nations['ISLE OF MAN'] =	81.30;
    nations['FINLAND'] =	81.00;
  	nations['BELGIUM'] =	81.10;
  	nations['PUERTO RICO'] =	80.90;
  	nations['IRELAND'] =	80.90;
  	nations['UNITED KINGDOM'] =	80.80;
    nations['GERMANY'] =	80.80;
  	nations['GREECE'] =	80.70;
  	nations['SAINT PIERRE AND MIQUELON'] =	80.60;
  	nations['FAROE_ISLANDS'] =	80.50;
  	nations['MALTA'] =	80.50;
  	nations['TAIWAN'] = 80.20;
  	nations['EUROPEAN UNION'] = 80.20;
  	nations['TURKS AND CAICOS ISLANDS'] = 80.00;
  	nations['UNITED STATES'] =	80.00;
    nations['WALLIS AND FUTUNA'] =	79.80;
  	nations['SAINT HELENA; ASCENSION; AND TRISTAN DA CUNHA'] =	79.60;
  	nations['GIBRALTAR'] = 79.60;
  	nations['DENMARK'] = 79.50;
  	nations['PORTUGAL'] = 79.40;
  	nations['VIRGIN ISLANDS'] =	79.40;
  	nations['BAHRAIN'] =	79.00;
  	nations['CHILE'] =	78.90;
  	nations['QATAR'] =	78.90;
  	nations['BRITISH VIRGIN ISLANDS'] =	78.80;
    nations['PANAMA'] =	78.80;
  	nations['CYPRUS'] =	78.80;
    nations['CUBA'] =	78.80;
  	nations['CZECHIA'] =	78.80;
    nations['ALBANIA'] =	78.50;
  	nations['COSTA RICA'] =	78.70;
    nations['DOMINICAN REPUBLIC'] =	78.30;
    nations['CURACAO'] =	78.50;
    nations['SLOVENIA'] =	78.30;
  	nations['SINT MAARTEN'] =	78.30;
    nations['NEW CALEDONIA'] =	77.90;
  	nations['KUWAIT'] =	78.20;
  	nations['SAINT LUCIA'] =	77.90;
  	nations['POLAND'] =	77.80;
    nations['UNITED ARAB EMIRATES'] =	77.70;
  	nations['LEBANON'] =	77.80;
    nations['FRENCH POLYNESIA'] =	77.40;
  	nations['URUGUAY'] =	77.40;
  	nations['PARAGUAY'] =	77.40;
  	nations['BRUNEI'] =	77.30;
  	nations['ARGENTINA'] =	77.30;
  	nations['SLOVAKIA'] =	77.30;
  	nations['DOMINICA'] =	77.20;
  	nations['MOROCCO'] =	77.10;
  	nations['ALGERIA'] =	77.00;
  	nations['ECUADOR'] =	77.00;
  	nations['ARUBA'] =	76.90;
  	nations['BOSNIA AND HERZEGOVINA'] =	76.90;
  	nations['SRI LANKA'] =	76.90;
  	nations['ESTONIA'] =	76.90;
  	nations['ANTIGUA AND BARBUDA'] =	76.70;
  	nations['LIBYA'] =	76.70;
  	nations['GEORGIA'] =	76.40;
  	nations['TONGA'] =	76.40;
  	nations['MACEDONIA'] =	76.40;
  	nations['CROATIA'] =	76.10;
  	nations['MEXICO'] =	76.10;
  	nations['HUNGARY'] =	76.10;
  	nations['VENEZUELA'] =	76.00;
  	nations['COOK ISLANDS'] =	76.00;
  	nations['GUAM'] =	76.00;
  	nations['SAINT KITTS AND NEVIS'] =	75.90;
  	nations['COLOMBIA'] =	75.90;
  	nations['MALDIVES'] =	75.80;
  	nations['MAURITIUS'] =	75.80;
  	nations['OMAN'] =	75.70;
  	nations['SERBIA'] =	75.70;
  	nations['TUNISIA'] =	75.70;
  	nations['CHINA'] =	75.70;
  	nations['SOLOMON ISLANDS'] =	75.60;
  	nations['SAINT VINCENT AND THE GRENADINES'] =	75.50;
  	nations['SAUDI ARABIA'] =	75.50;
  	nations['BARBADOS'] =	75.50;
    nations['NORTHERN MARIANA ISLANDS'] =	75.40;
    nations['ROMANIA'] = 75.40;
    nations['MALAYSIA'] = 75.20;
    nations['WEST BANK'] = 75.20;
    nations['SYRIA'] = 75.10;
    nations['LITHUANIA'] = 75.00;
    nations['TURKEY'] = 75.00;
    nations['ARMENIA'] = 74.90;
    nations['EL SALVADOR'] = 74.90;
    nations['THAILAND'] = 74.90;
    nations['IRAQ'] = 74.90;
    nations['JORDAN'] = 74.80;
    nations['SEYCHELLES'] = 74.90;
    nations['BULGARIA'] = 74.70;
    nations['LATVIA'] = 74.70;
    nations['GRENADA'] = 74.50;
    nations['MONTSERRAT'] = 74.60;
    nations['GAZA STRIP'] = 74.20;
    nations['PERU'] = 74.00;
    nations['SAMOA'] = 74.00;
    nations['BRAZIL'] = 74.00;
    nations['UZBEKISTAN'] =	74.00;
    nations['IRAN'] = 74.00;
    nations['VANUATU'] = 73.70;
    nations['JAMAICA'] = 73.70;
    nations['VIETNAM'] = 73.70;
    nations['NICARAGUA'] = 73.50;
    nations['PALAU'] = 73.40;
    nations['AMERICAN SAMOA'] = 73.40;
    nations['BANGLADESH'] = 73.40;
    nations['MARSHALL ISLANDS'] = 73.40;
    nations['TRINIDAD AND TOBAGO'] = 73.10;
    nations['FIJI'] = 73.00;
    nations['FEDERATED STATES OF MICRONESIA'] = 73.10;
    nations['BELARUS'] = 73.00;
    nations['EGYPT'] = 73.00;
    nations['INDONESIA'] = 73.00;
    nations['AZERBAIJAN'] = 72.80;
    nations['THE BAHAMAS'] = 72.60;
    nations['GREENLAND'] = 72.60;
    nations['GUATEMALA'] = 72.60;
    nations['SURINAME'] = 72.50;
    nations['UKRAINE'] = 72.10;
    nations['CABO VERDE'] = 72.40;
    nations['KAZAKHSTAN'] = 71.10;
    nations['HONDURAS'] = 71.20;
    nations['NEPAL'] = 71.00;
    nations['RUSSIA'] = 71.00;
    nations['MOLDOVA'] = 71.00;
    nations['KYRGYZSTAN'] = 70.90;
    nations['BHUTAN'] = 70.60;
    nations['NORTH KOREA'] = 70.70;
    nations['TURKMENISTAN'] = 70.40;
    nations['MONGOLIA'] = 69.90;
    nations['PHILIPPINES'] = 69.40;
    nations['BOLIVIA'] = 69.50;
    nations['BELIZE'] = 68.90;
    nations['INDIA'] = 68.80;
    nations['GUYANA'] = 68.60;
    nations['TIMOR-LESTE'] = 68.40;
    nations['BURMA'] = 68.20;
    nations['PAKISTAN'] = 68.10;
    nations['TAJIKISTAN'] = 68.10;
    nations['NAURU'] = 67.40;
    nations['PAPUA NEW GUINEA'] = 67.30;
    nations['GHANA'] = 67.00;
    nations['TUVALU'] = 66.90;
    nations['KIRIBATI'] = 66.50;
    nations['YEMEN'] = 65.90;
    nations['MADAGASCAR'] = 66.30;
    nations['TOGO'] = 65.40;
    nations['SAO TOME AND PRINCIPE'] = 65.30;
    nations['ERITREA'] = 65.20;
    nations['THE GAMBIA'] = 65.10;
    nations['CAMBODIA'] = 64.90;
    nations['COMOROS'] = 64.60;
    nations['EQUATORIAL GUINEA'] = 64.60;
    nations['LAOS'] = 64.60;
    nations['SUDAN'] = 64.40;
    nations['KENYA'] = 64.30;
    nations['HAITI'] = 64.20;
    nations['RWANDA'] = 64.30;
    nations['NAMIBIA'] = 64.00;
    nations['SOUTH AFRICA'] = 63.80;
    nations['DJIBOUTI'] = 63.60;
    nations['WESTERN SAHARA'] = 63.40;
    nations['MAURITANIA'] = 63.40;
    nations['BOTSWANA'] = 63.30;
    nations['LIBERIA'] = 63.30;
    nations['ETHIOPIA'] = 62.60;
    nations['TANZANIA'] = 62.60;
    nations['SENEGAL'] = 62.10;
    nations['BENIN'] = 62.30;
    nations['MALAWI'] = 61.70;
    nations['GUINEA'] = 61.00;
    nations['BURUNDI'] = 60.90;
    nations['ZIMBABWE'] = 60.40;
    nations['MALI'] = 60.30;
    nations['ANGOLA'] = 60.20;
    nations['REPUBLIC OF THE CONGO'] = 59.80;
    nations['COTE D IVOIRE'] = 59.00;
    nations['CAMEROON'] = 59.00;
    nations['SIERRA LEONE'] = 58.60;
    nations['BURKINA FASO'] = 55.90;
    nations['DEMOCRATIC REPUBLIC OF THE CONGO'] = 57.70;
    nations['UGANDA'] = 55.90;
    nations['NIGER'] = 55.90;
    nations['NIGERIA'] = 53.80;
    nations['MOZAMBIQUE'] = 53.70;
    nations['LESOTHO'] = 53.00;
    nations['CENTRAL AFRICAN REPUBLIC'] = 52.80;
    nations['SOMALIA'] = 52.80;
    nations['ZAMBIA'] = 52.70;
    nations['SWAZILAND'] = 52.10;
    nations['GABON'] = 52.10;
    nations['AFGHANISTAN'] = 51.70;
    nations['GUINEA BISSAU'] = 51.00;
    nations['CHAD'] = 50.60;


    var totalYears = 0;

    if(nationality == "") {
      totalYears = 71
    } else {
      totalYears = nations[nationality];
    };

    if (gender == "female") {
      totalYears += 2;
    } else if (gender == "male") {
      totalYears -= 1;
    };

    if (smoker == true) {
      totalYears -= 10;
    };
    return (totalYears - this.getEarthAge());
  };

};
