main.controller("BecomeCarrierController", function ($scope, $http, $rootScope, $location, Upload, $timeout) {

$scope.personal =[];
$scope.communication =[];
$scope.aboutyou =[];
$scope.profession =[];
$scope.verification =[];
$scope.documents =[];
$scope.isSubmitDisabled=true;
//Below flag is used to display the mandatory error tooltip on top of the page
$scope.errorList=[];
$scope.formValidationList=[];
$scope.isMandatoryFields =true;
$scope.steps = [
    'personal',
    'communication',
    'aboutyou',
    'profession',
    'verification',
    'documents'
  ];
  $scope.selection = $scope.steps[0];

  $scope.getCurrentStepIndex = function(){
    // Get the index of the current step given selection
    return _.indexOf($scope.steps, $scope.selection);
  };

  // Go to a defined step index
//   $scope.goToStep = function(index) {
//     if ( !_.isUndefined($scope.steps[index]) )
//     {
//       $scope.selection = $scope.steps[index];
//     }
//   };
$scope.goToStep = function(value) {
    if ( !_.isUndefined($scope.steps(value)) )
    {
      $scope.selection = $scope.steps(value);
    }
  };

  $scope.hasNextStep = function(){
    var stepIndex = $scope.getCurrentStepIndex();
    var nextStep = stepIndex + 1;
    // Return true if there is a next step, false if not
    return !_.isUndefined($scope.steps[nextStep]);
  };

  $scope.hasPreviousStep = function(){
    var stepIndex = $scope.getCurrentStepIndex();
    var previousStep = stepIndex - 1;
    // Return true if there is a next step, false if not
    return !_.isUndefined($scope.steps[previousStep]);
  };

  $scope.incrementStep = function() {
    if ( $scope.hasNextStep() )
    {
      var stepIndex = $scope.getCurrentStepIndex();
      var nextStep = stepIndex + 1;
      $scope.selection = $scope.steps[nextStep];
    }
  };

  $scope.decrementStep = function() {
    if ( $scope.hasPreviousStep() )
    {
      var stepIndex = $scope.getCurrentStepIndex();
      var previousStep = stepIndex - 1;
      $scope.selection = $scope.steps[previousStep];
    }
  };
  

 
  
$scope.SaveBecomeCarrier = function(){
    //Perform save based on the tab
    //check which tab the data is from
    var tabName = $scope.selection;
    if(angular.isUndefined($scope.personal.salutation) ||  angular.isUndefined($scope.personal.first_name) || angular.isUndefined($scope.personal.last_name) || angular.isUndefined($scope.dt))
    {
        alert("Please fill the required fields");
    }
    else{
        alert("well done");   
    }
};
//

$scope.SubmitBecomeCarrier = function(){
    
    };
//Date of birth start
        var numberOfYears = (new Date()).getYear()+1;
        //alert((new Date()).getFullYear());
        var years = $.map($(Array(numberOfYears)), function (val, i) { return i + 1900; });
        var months = $.map($(Array(12)), function (val, i) { return i + 1; });
        var days = $.map($(Array(31)), function (val, i) { return i + 1; });

        var isLeapYear = function () {
            var year = $scope.personal.SelectedYear || 0;
            return ((year % 400 === 0 || year % 100 !== 0) && (year % 4 === 0)) ? 1 : 0;
        }
        var getNumberOfDaysInMonth = function () {
            var selectedMonth = $scope.personal.SelectedMonth || 0;
            return 31 - ((selectedMonth === 2) ? (3 - isLeapYear()) : ((selectedMonth - 1) % 7 % 2));
        }
        $scope.UpdateNumberOfDays = function () {
            //validate with current date and month
            if($scope.personal.SelectedYear == (new Date()).getFullYear())
            {
                var filterMonths = $.map($(Array((new Date()).getMonth()+1)), function (val, i) { return i + 1; });
                if($scope.Months.length != filterMonths.length){$scope.Months = filterMonths;}
                if($scope.personal.SelectedMonth == (new Date()).getMonth()+1)
                {
                    var filterDays = $.map($(Array((new Date()).getDate())), function (val, i) { return i + 1; });
                    if($scope.Days.length != filterDays.length){$scope.Days = filterDays;}
                }
            }
            else
            {
                $scope.Days = days;
                $scope.Months = months;
            }
            $scope.NumberOfDays = getNumberOfDaysInMonth();
        }
        $scope.NumberOfDays = 31;
        $scope.Years = years;
        $scope.Days = days;
        $scope.Months = months;
//Date of birth end
//Communication Tab work Start here
$scope.languagesTotal = [
            {"name": "Afrikaans"},
            {"name": "Akan"},
            {"name": "Amharic"},
            {"name": "Arabic"},
            {"name": "Assamese"},
            {"name": "Awadhi"},
            {"name": "Azerbaijani"},
            {"name": "Balochi"},
            {"name": "Belarusian"},
            {"name": "Bengali"},
            {"name": "Bhojpuri"},
            {"name": "Burmese"},
            {"name": "Cantonese"},
            {"name": "Cebuano"},
            {"name": "Chewa"},
            {"name": "Chhattisgarhi"},
            {"name": "Chittagonian"},
            {"name": "Czech"},
            {"name": "Deccan"},
            {"name": "Dhundhari"},
            {"name": "Dutch"},
            {"name": "Finnish"},
            {"name": "French"},
            {"name": "Fula"},
            {"name": "Gan"},
            {"name": "German"},
            {"name": "Greek"},
            {"name": "Gujarati"},
            {"name": "Haitian Creole"},
            {"name": "Hakka"},
            {"name": "Haryanvi"},
            {"name": "Hausa"},
            {"name": "Hebrew"},
            {"name": "Hiligaynon"},
            {"name": "Hindi"},
            {"name": "Hmong"},
            {"name": "Hungarian"},
            {"name": "Igbo"},
            {"name": "Ilokano"},
            {"name": "Italian"},
            {"name": "Japanese"},
            {"name": "Javanese"},
            {"name": "Jin"},
            {"name": "Kannada"},
            {"name": "Kazakh"},
            {"name": "Khmer"},
            {"name": "Kinyarwanda"},
            {"name": "Kirundi"},
            {"name": "Konkani"},
            {"name": "Korean"},
            {"name": "Kurdish"},
            {"name": "Madurese"},
            {"name": "Magahi"},
            {"name": "Maithili"},
            {"name": "Malagasy"},
            {"name": "Malayalam"},
            {"name": "Malay/Indonesian"},
            {"name": "Mandarin"},
            {"name": "Marathi"},
            {"name": "Marwari"},
            {"name": "Min Bei"},
            {"name": "Min Dong"},
            {"name": "Min Nan"},
            {"name": "Mossi"},
            {"name": "Nepali"},
            {"name": "Norwegian"},
            {"name": "Odia"},
            {"name": "Oromo"},
            {"name": "Pashto"},
            {"name": "Persian"},
            {"name": "Polish"},
            {"name": "Portuguese"},
            {"name": "Punjabi"},
            {"name": "Quechua"},
            {"name": "Romanian"},
            {"name": "Russian"},
            {"name": "Saraiki"},
            {"name": "Serbo-Croatian"},
            {"name": "Shona"},
            {"name": "Sindhi"},
            {"name": "Sinhalese"},
            {"name": "Slovenian"},
            {"name": "Somali"},
            {"name": "Spanish"},
            {"name": "Sundanese"},
            {"name": "Swedish"},
            {"name": "Sylheti"},
            {"name": "Tagalog"},
            {"name": "Tamil"},
            {"name": "Telugu"},
            {"name": "Thai"},
            {"name": "Turkish"},
            {"name": "Turkmen"},
            {"name": "Ukrainian"},
            {"name": "Urdu"},
            {"name": "Uyghur"},
            {"name": "Uzbek"},
            {"name": "Vietnamese"},
            {"name": "Wu"},
            {"name": "Xhosa"},
            {"name": "Xiang"},
            {"name": "Yoruba"},
            {"name": "Zhuang"},
            {"name": "Zulu"} 
    ];
//Language rating
$scope.rateLanguages = [
    {"rate":"Basic: You know a few words"},
    {"rate":"Advanced: You communicate very well"},
    {"rate":"Expert/Native Speaker: You communicate perfect without exception"}
];
$scope.languageList = [{}];
$scope.deleteLanguage = function(index){
    $scope.languageList.splice(index, 1);
};
$scope.addLanguage = function(){
    $scope.languageList.push({});
  };
//
$scope.emergencyContactList={Friend:"Friend",Spouse:"Spouse",Mum:"Mum",Dad:"Dad",Brother:"Brother",Sister:"Sister",Other:"Other"};
//
$scope.professionTypeList={Employed:"Employed",Freelancer:"Freelancer",Parttime:"Part-time",Retiree:"Retiree",Jobseeking:"Job Seeking",Selfemployed:"Self-Employed",Student:"Student"};
//
$scope.countryList=[ 
{"name": "Afghanistan", "code": "AF"}, 
{"name": "land Islands", "code": "AX"}, 
{"name": "Albania", "code": "AL"}, 
{"name": "Algeria", "code": "DZ"}, 
{"name": "American Samoa", "code": "AS"}, 
{"name": "AndorrA", "code": "AD"}, 
{"name": "Angola", "code": "AO"}, 
{"name": "Anguilla", "code": "AI"}, 
{"name": "Antarctica", "code": "AQ"}, 
{"name": "Antigua and Barbuda", "code": "AG"}, 
{"name": "Argentina", "code": "AR"}, 
{"name": "Armenia", "code": "AM"}, 
{"name": "Aruba", "code": "AW"}, 
{"name": "Australia", "code": "AU"}, 
{"name": "Austria", "code": "AT"}, 
{"name": "Azerbaijan", "code": "AZ"}, 
{"name": "Bahamas", "code": "BS"}, 
{"name": "Bahrain", "code": "BH"}, 
{"name": "Bangladesh", "code": "BD"}, 
{"name": "Barbados", "code": "BB"}, 
{"name": "Belarus", "code": "BY"}, 
{"name": "Belgium", "code": "BE"}, 
{"name": "Belize", "code": "BZ"}, 
{"name": "Benin", "code": "BJ"}, 
{"name": "Bermuda", "code": "BM"}, 
{"name": "Bhutan", "code": "BT"}, 
{"name": "Bolivia", "code": "BO"}, 
{"name": "Bosnia and Herzegovina", "code": "BA"}, 
{"name": "Botswana", "code": "BW"}, 
{"name": "Bouvet Island", "code": "BV"}, 
{"name": "Brazil", "code": "BR"}, 
{"name": "British Indian Ocean Territory", "code": "IO"}, 
{"name": "Brunei Darussalam", "code": "BN"}, 
{"name": "Bulgaria", "code": "BG"}, 
{"name": "Burkina Faso", "code": "BF"}, 
{"name": "Burundi", "code": "BI"}, 
{"name": "Cambodia", "code": "KH"}, 
{"name": "Cameroon", "code": "CM"}, 
{"name": "Canada", "code": "CA"}, 
{"name": "Cape Verde", "code": "CV"}, 
{"name": "Cayman Islands", "code": "KY"}, 
{"name": "Central African Republic", "code": "CF"}, 
{"name": "Chad", "code": "TD"}, 
{"name": "Chile", "code": "CL"}, 
{"name": "China", "code": "CN"}, 
{"name": "Christmas Island", "code": "CX"}, 
{"name": "Cocos (Keeling) Islands", "code": "CC"}, 
{"name": "Colombia", "code": "CO"}, 
{"name": "Comoros", "code": "KM"}, 
{"name": "Congo", "code": "CG"}, 
{"name": "Congo, The Democratic Republic of the", "code": "CD"}, 
{"name": "Cook Islands", "code": "CK"}, 
{"name": "Costa Rica", "code": "CR"}, 
{"name": "Cote D\"Ivoire", "code": "CI"}, 
{"name": "Croatia", "code": "HR"}, 
{"name": "Cuba", "code": "CU"}, 
{"name": "Cyprus", "code": "CY"}, 
{"name": "Czech Republic", "code": "CZ"}, 
{"name": "Denmark", "code": "DK"}, 
{"name": "Djibouti", "code": "DJ"}, 
{"name": "Dominica", "code": "DM"}, 
{"name": "Dominican Republic", "code": "DO"}, 
{"name": "Ecuador", "code": "EC"}, 
{"name": "Egypt", "code": "EG"}, 
{"name": "El Salvador", "code": "SV"}, 
{"name": "Equatorial Guinea", "code": "GQ"}, 
{"name": "Eritrea", "code": "ER"}, 
{"name": "Estonia", "code": "EE"}, 
{"name": "Ethiopia", "code": "ET"}, 
{"name": "Falkland Islands (Malvinas)", "code": "FK"}, 
{"name": "Faroe Islands", "code": "FO"}, 
{"name": "Fiji", "code": "FJ"}, 
{"name": "Finland", "code": "FI"}, 
{"name": "France", "code": "FR"}, 
{"name": "French Guiana", "code": "GF"}, 
{"name": "French Polynesia", "code": "PF"}, 
{"name": "French Southern Territories", "code": "TF"}, 
{"name": "Gabon", "code": "GA"}, 
{"name": "Gambia", "code": "GM"}, 
{"name": "Georgia", "code": "GE"}, 
{"name": "Germany", "code": "DE"}, 
{"name": "Ghana", "code": "GH"}, 
{"name": "Gibraltar", "code": "GI"}, 
{"name": "Greece", "code": "GR"}, 
{"name": "Greenland", "code": "GL"}, 
{"name": "Grenada", "code": "GD"}, 
{"name": "Guadeloupe", "code": "GP"}, 
{"name": "Guam", "code": "GU"}, 
{"name": "Guatemala", "code": "GT"}, 
{"name": "Guernsey", "code": "GG"}, 
{"name": "Guinea", "code": "GN"}, 
{"name": "Guinea-Bissau", "code": "GW"}, 
{"name": "Guyana", "code": "GY"}, 
{"name": "Haiti", "code": "HT"}, 
{"name": "Heard Island and Mcdonald Islands", "code": "HM"}, 
{"name": "Holy See (Vatican City State)", "code": "VA"}, 
{"name": "Honduras", "code": "HN"}, 
{"name": "Hong Kong", "code": "HK"}, 
{"name": "Hungary", "code": "HU"}, 
{"name": "Iceland", "code": "IS"}, 
{"name": "India", "code": "IN"}, 
{"name": "Indonesia", "code": "ID"}, 
{"name": "Iran, Islamic Republic Of", "code": "IR"}, 
{"name": "Iraq", "code": "IQ"}, 
{"name": "Ireland", "code": "IE"}, 
{"name": "Isle of Man", "code": "IM"}, 
{"name": "Israel", "code": "IL"}, 
{"name": "Italy", "code": "IT"}, 
{"name": "Jamaica", "code": "JM"}, 
{"name": "Japan", "code": "JP"}, 
{"name": "Jersey", "code": "JE"}, 
{"name": "Jordan", "code": "JO"}, 
{"name": "Kazakhstan", "code": "KZ"}, 
{"name": "Kenya", "code": "KE"}, 
{"name": "Kiribati", "code": "KI"}, 
{"name": "Korea, Democratic People\"S Republic of", "code": "KP"}, 
{"name": "Korea, Republic of", "code": "KR"}, 
{"name": "Kuwait", "code": "KW"}, 
{"name": "Kyrgyzstan", "code": "KG"}, 
{"name": "Lao People\"S Democratic Republic", "code": "LA"}, 
{"name": "Latvia", "code": "LV"}, 
{"name": "Lebanon", "code": "LB"}, 
{"name": "Lesotho", "code": "LS"}, 
{"name": "Liberia", "code": "LR"}, 
{"name": "Libyan Arab Jamahiriya", "code": "LY"}, 
{"name": "Liechtenstein", "code": "LI"}, 
{"name": "Lithuania", "code": "LT"}, 
{"name": "Luxembourg", "code": "LU"}, 
{"name": "Macao", "code": "MO"}, 
{"name": "Macedonia, The Former Yugoslav Republic of", "code": "MK"}, 
{"name": "Madagascar", "code": "MG"}, 
{"name": "Malawi", "code": "MW"}, 
{"name": "Malaysia", "code": "MY"}, 
{"name": "Maldives", "code": "MV"}, 
{"name": "Mali", "code": "ML"}, 
{"name": "Malta", "code": "MT"}, 
{"name": "Marshall Islands", "code": "MH"}, 
{"name": "Martinique", "code": "MQ"}, 
{"name": "Mauritania", "code": "MR"}, 
{"name": "Mauritius", "code": "MU"}, 
{"name": "Mayotte", "code": "YT"}, 
{"name": "Mexico", "code": "MX"}, 
{"name": "Micronesia, Federated States of", "code": "FM"}, 
{"name": "Moldova, Republic of", "code": "MD"}, 
{"name": "Monaco", "code": "MC"}, 
{"name": "Mongolia", "code": "MN"}, 
{"name": "Montenegro", "code": "ME"},
{"name": "Montserrat", "code": "MS"},
{"name": "Morocco", "code": "MA"}, 
{"name": "Mozambique", "code": "MZ"}, 
{"name": "Myanmar", "code": "MM"}, 
{"name": "Namibia", "code": "NA"}, 
{"name": "Nauru", "code": "NR"}, 
{"name": "Nepal", "code": "NP"}, 
{"name": "Netherlands", "code": "NL"}, 
{"name": "Netherlands Antilles", "code": "AN"}, 
{"name": "New Caledonia", "code": "NC"}, 
{"name": "New Zealand", "code": "NZ"}, 
{"name": "Nicaragua", "code": "NI"}, 
{"name": "Niger", "code": "NE"}, 
{"name": "Nigeria", "code": "NG"}, 
{"name": "Niue", "code": "NU"}, 
{"name": "Norfolk Island", "code": "NF"}, 
{"name": "Northern Mariana Islands", "code": "MP"}, 
{"name": "Norway", "code": "NO"}, 
{"name": "Oman", "code": "OM"}, 
{"name": "Pakistan", "code": "PK"}, 
{"name": "Palau", "code": "PW"}, 
{"name": "Palestinian Territory, Occupied", "code": "PS"}, 
{"name": "Panama", "code": "PA"}, 
{"name": "Papua New Guinea", "code": "PG"}, 
{"name": "Paraguay", "code": "PY"}, 
{"name": "Peru", "code": "PE"}, 
{"name": "Philippines", "code": "PH"}, 
{"name": "Pitcairn", "code": "PN"}, 
{"name": "Poland", "code": "PL"}, 
{"name": "Portugal", "code": "PT"}, 
{"name": "Puerto Rico", "code": "PR"}, 
{"name": "Qatar", "code": "QA"}, 
{"name": "Reunion", "code": "RE"}, 
{"name": "Romania", "code": "RO"}, 
{"name": "Russian Federation", "code": "RU"}, 
{"name": "RWANDA", "code": "RW"}, 
{"name": "Saint Helena", "code": "SH"}, 
{"name": "Saint Kitts and Nevis", "code": "KN"}, 
{"name": "Saint Lucia", "code": "LC"}, 
{"name": "Saint Pierre and Miquelon", "code": "PM"}, 
{"name": "Saint Vincent and the Grenadines", "code": "VC"}, 
{"name": "Samoa", "code": "WS"}, 
{"name": "San Marino", "code": "SM"}, 
{"name": "Sao Tome and Principe", "code": "ST"}, 
{"name": "Saudi Arabia", "code": "SA"}, 
{"name": "Senegal", "code": "SN"}, 
{"name": "Serbia", "code": "RS"}, 
{"name": "Seychelles", "code": "SC"}, 
{"name": "Sierra Leone", "code": "SL"}, 
{"name": "Singapore", "code": "SG"}, 
{"name": "Slovakia", "code": "SK"}, 
{"name": "Slovenia", "code": "SI"}, 
{"name": "Solomon Islands", "code": "SB"}, 
{"name": "Somalia", "code": "SO"}, 
{"name": "South Africa", "code": "ZA"}, 
{"name": "South Georgia and the South Sandwich Islands", "code": "GS"}, 
{"name": "Spain", "code": "ES"}, 
{"name": "Sri Lanka", "code": "LK"}, 
{"name": "Sudan", "code": "SD"}, 
{"name": "Suriname", "code": "SR"}, 
{"name": "Svalbard and Jan Mayen", "code": "SJ"}, 
{"name": "Swaziland", "code": "SZ"}, 
{"name": "Sweden", "code": "SE"}, 
{"name": "Switzerland", "code": "CH"}, 
{"name": "Syrian Arab Republic", "code": "SY"}, 
{"name": "Taiwan, Province of China", "code": "TW"}, 
{"name": "Tajikistan", "code": "TJ"}, 
{"name": "Tanzania, United Republic of", "code": "TZ"}, 
{"name": "Thailand", "code": "TH"}, 
{"name": "Timor-Leste", "code": "TL"}, 
{"name": "Togo", "code": "TG"}, 
{"name": "Tokelau", "code": "TK"}, 
{"name": "Tonga", "code": "TO"}, 
{"name": "Trinidad and Tobago", "code": "TT"}, 
{"name": "Tunisia", "code": "TN"}, 
{"name": "Turkey", "code": "TR"}, 
{"name": "Turkmenistan", "code": "TM"}, 
{"name": "Turks and Caicos Islands", "code": "TC"}, 
{"name": "Tuvalu", "code": "TV"}, 
{"name": "Uganda", "code": "UG"}, 
{"name": "Ukraine", "code": "UA"}, 
{"name": "United Arab Emirates", "code": "AE"}, 
{"name": "United Kingdom", "code": "GB"}, 
{"name": "United States", "code": "US"}, 
{"name": "United States Minor Outlying Islands", "code": "UM"}, 
{"name": "Uruguay", "code": "UY"}, 
{"name": "Uzbekistan", "code": "UZ"}, 
{"name": "Vanuatu", "code": "VU"}, 
{"name": "Venezuela", "code": "VE"}, 
{"name": "Viet Nam", "code": "VN"}, 
{"name": "Virgin Islands, British", "code": "VG"}, 
{"name": "Virgin Islands, U.S.", "code": "VI"}, 
{"name": "Wallis and Futuna", "code": "WF"}, 
{"name": "Western Sahara", "code": "EH"}, 
{"name": "Yemen", "code": "YE"}, 
{"name": "Zambia", "code": "ZM"}, 
{"name": "Zimbabwe", "code": "ZW"} 
];
$scope.passportList = [{}];
$scope.deletePassport = function(index){
    $scope.passportList.splice(index, 1);
};
$scope.addPassport = function(){
    $scope.passportList.push({});
  };
//
$scope.visaList = [{}];
$scope.deleteVisa = function(index){
    $scope.visaList.splice(index, 1);
};
$scope.addVisa = function(){
    $scope.visaList.push({});
  };
  //
$scope.frequentFlyList = [{}];
$scope.deleteFTL = function(index){
    $scope.frequentFlyList.splice(index, 1);
};
$scope.addFTL = function(){
    $scope.frequentFlyList.push({});
  };
  //
$scope.certificateList = [{}];
$scope.deleteCertificate = function(index){
    $scope.certificateList.splice(index, 1);
};
$scope.addCertificate = function(){
    $scope.certificateList.push({});
  };
//
$scope.available = function(){
    $scope.availableValue = "active";
    $scope.unavailableValue = "inactive";
};
$scope.unavailable = function(){
    $scope.unavailableValue = "active";
    $scope.availableValue = "inactive";
};
$scope.uploadFiles = function(file, errFiles) {
        $scope.f = file;
        $scope.errFile = errFiles && errFiles[0];
        if (file) {
            file.upload = Upload.upload({
                url: 'http://localhost:3000/upload',
                data: {file: file}
            });

            file.upload.then(function (response) {
                $timeout(function () {
                    $scope.avatar='/Images/'+response.data;
                });
            }, function (response) {
                if (response.status > 0)
                    $scope.errorMsg = response.status + ': ' + response.data;
            }, function (evt) {
                file.progress = Math.min(100, parseInt(100.0 * 
                                         evt.loaded / evt.total));
            });
        }   
    }

$scope.avatar="/images/mani.png";
// $scope.avatar='/Images/person1.jpeg';
//Communication Tab work End here
function stripEndQuotes(s){
	var t=s.length;
	if (s.charAt(0)=='"') s=s.substring(1,t--);
	if (s.charAt(--t)=='"') s=s.substring(0,t);
	return s;
}
$scope.mandatoryCheckFunction = function(value){
    //Remove the string quotes
 if(angular.isUndefined(value))
 {
     return false;
 }
 else
 {
     if(value == "")
     {
         return false;
     }
     else
     {
         return true;
     }
 }
    
}
$(function(){
$('a[title]').tooltip();
});
});