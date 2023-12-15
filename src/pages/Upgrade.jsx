import React from 'react';
import { useToast } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import SectionTitle2 from '../common/SectionTitle2';
import num1 from '../assets/images/tutorial/01.png';
import songImg from '../assets/images/renew/song-img.png';
import Purchase from '../components/Purchase';

export default function Upgrade() {
  const [key, setKey] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [country, setCountry] = useState('');
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const toast = useToast();

  const countriesArray = {
    BD: 'Bangladesh',
    BE: 'Belgium',
    BF: 'Burkina Faso',
    BG: 'Bulgaria',
    BA: 'Bosnia and Herzegovina',
    BB: 'Barbados',
    WF: 'Wallis and Futuna',
    BL: 'Saint Barthelemy',
    BM: 'Bermuda',
    BN: 'Brunei',
    BO: 'Bolivia',
    BH: 'Bahrain',
    BI: 'Burundi',
    BJ: 'Benin',
    BT: 'Bhutan',
    JM: 'Jamaica',
    BV: 'Bouvet Island',
    BW: 'Botswana',
    WS: 'Samoa',
    BQ: 'Bonaire, Saint Eustatius and Saba ',
    BR: 'Brazil',
    BS: 'Bahamas',
    JE: 'Jersey',
    BY: 'Belarus',
    BZ: 'Belize',
    RU: 'Russia',
    RW: 'Rwanda',
    RS: 'Serbia',
    TL: 'East Timor',
    RE: 'Reunion',
    TM: 'Turkmenistan',
    TJ: 'Tajikistan',
    RO: 'Romania',
    TK: 'Tokelau',
    GW: 'Guinea-Bissau',
    GU: 'Guam',
    GT: 'Guatemala',
    GS: 'South Georgia and the South Sandwich Islands',
    GR: 'Greece',
    GQ: 'Equatorial Guinea',
    GP: 'Guadeloupe',
    JP: 'Japan',
    GY: 'Guyana',
    GG: 'Guernsey',
    GF: 'French Guiana',
    GE: 'Georgia',
    GD: 'Grenada',
    GB: 'United Kingdom',
    GA: 'Gabon',
    SV: 'El Salvador',
    GN: 'Guinea',
    GM: 'Gambia',
    GL: 'Greenland',
    GI: 'Gibraltar',
    GH: 'Ghana',
    OM: 'Oman',
    TN: 'Tunisia',
    JO: 'Jordan',
    HR: 'Croatia',
    HT: 'Haiti',
    HU: 'Hungary',
    HK: 'Hong Kong',
    HN: 'Honduras',
    HM: 'Heard Island and McDonald Islands',
    VE: 'Venezuela',
    PR: 'Puerto Rico',
    PS: 'Palestinian Territory',
    PW: 'Palau',
    PT: 'Portugal',
    SJ: 'Svalbard and Jan Mayen',
    PY: 'Paraguay',
    IQ: 'Iraq',
    PA: 'Panama',
    PF: 'French Polynesia',
    PG: 'Papua New Guinea',
    PE: 'Peru',
    PK: 'Pakistan',
    PH: 'Philippines',
    PN: 'Pitcairn',
    PL: 'Poland',
    PM: 'Saint Pierre and Miquelon',
    ZM: 'Zambia',
    EH: 'Western Sahara',
    EE: 'Estonia',
    EG: 'Egypt',
    ZA: 'South Africa',
    EC: 'Ecuador',
    IT: 'Italy',
    VN: 'Vietnam',
    SB: 'Solomon Islands',
    ET: 'Ethiopia',
    SO: 'Somalia',
    ZW: 'Zimbabwe',
    SA: 'Saudi Arabia',
    ES: 'Spain',
    ER: 'Eritrea',
    ME: 'Montenegro',
    MD: 'Moldova',
    MG: 'Madagascar',
    MF: 'Saint Martin',
    MA: 'Morocco',
    MC: 'Monaco',
    UZ: 'Uzbekistan',
    MM: 'Myanmar',
    ML: 'Mali',
    MO: 'Macao',
    MN: 'Mongolia',
    MH: 'Marshall Islands',
    MK: 'Macedonia',
    MU: 'Mauritius',
    MT: 'Malta',
    MW: 'Malawi',
    MV: 'Maldives',
    MQ: 'Martinique',
    MP: 'Northern Mariana Islands',
    MS: 'Montserrat',
    MR: 'Mauritania',
    IM: 'Isle of Man',
    UG: 'Uganda',
    TZ: 'Tanzania',
    MY: 'Malaysia',
    MX: 'Mexico',
    IL: 'Israel',
    FR: 'France',
    IO: 'British Indian Ocean Territory',
    SH: 'Saint Helena',
    FI: 'Finland',
    FJ: 'Fiji',
    FK: 'Falkland Islands',
    FM: 'Micronesia',
    FO: 'Faroe Islands',
    NI: 'Nicaragua',
    NL: 'Netherlands',
    NO: 'Norway',
    NA: 'Namibia',
    VU: 'Vanuatu',
    NC: 'New Caledonia',
    NE: 'Niger',
    NF: 'Norfolk Island',
    NG: 'Nigeria',
    NZ: 'New Zealand',
    NP: 'Nepal',
    NR: 'Nauru',
    NU: 'Niue',
    CK: 'Cook Islands',
    XK: 'Kosovo',
    CI: 'Ivory Coast',
    CH: 'Switzerland',
    CO: 'Colombia',
    CN: 'China',
    CM: 'Cameroon',
    CL: 'Chile',
    CC: 'Cocos Islands',
    CA: 'Canada',
    CG: 'Republic of the Congo',
    CF: 'Central African Republic',
    CD: 'Democratic Republic of the Congo',
    CZ: 'Czech Republic',
    CY: 'Cyprus',
    CX: 'Christmas Island',
    CR: 'Costa Rica',
    CW: 'Curacao',
    CV: 'Cape Verde',
    CU: 'Cuba',
    SZ: 'Swaziland',
    SY: 'Syria',
    SX: 'Sint Maarten',
    KG: 'Kyrgyzstan',
    KE: 'Kenya',
    SS: 'South Sudan',
    SR: 'Suriname',
    KI: 'Kiribati',
    KH: 'Cambodia',
    KN: 'Saint Kitts and Nevis',
    KM: 'Comoros',
    ST: 'Sao Tome and Principe',
    SK: 'Slovakia',
    KR: 'South Korea',
    SI: 'Slovenia',
    KP: 'North Korea',
    KW: 'Kuwait',
    SN: 'Senegal',
    SM: 'San Marino',
    SL: 'Sierra Leone',
    SC: 'Seychelles',
    KZ: 'Kazakhstan',
    KY: 'Cayman Islands',
    SG: 'Singapore',
    SE: 'Sweden',
    SD: 'Sudan',
    DO: 'Dominican Republic',
    DM: 'Dominica',
    DJ: 'Djibouti',
    DK: 'Denmark',
    VG: 'British Virgin Islands',
    DE: 'Germany',
    YE: 'Yemen',
    DZ: 'Algeria',
    US: 'United States',
    UY: 'Uruguay',
    YT: 'Mayotte',
    UM: 'United States Minor Outlying Islands',
    LB: 'Lebanon',
    LC: 'Saint Lucia',
    LA: 'Laos',
    TV: 'Tuvalu',
    TW: 'Taiwan',
    TT: 'Trinidad and Tobago',
    TR: 'Turkey',
    LK: 'Sri Lanka',
    LI: 'Liechtenstein',
    LV: 'Latvia',
    TO: 'Tonga',
    LT: 'Lithuania',
    LU: 'Luxembourg',
    LR: 'Liberia',
    LS: 'Lesotho',
    TH: 'Thailand',
    TF: 'French Southern Territories',
    TG: 'Togo',
    TD: 'Chad',
    TC: 'Turks and Caicos Islands',
    LY: 'Libya',
    VA: 'Vatican',
    VC: 'Saint Vincent and the Grenadines',
    AE: 'United Arab Emirates',
    AD: 'Andorra',
    AG: 'Antigua and Barbuda',
    AF: 'Afghanistan',
    AI: 'Anguilla',
    VI: 'U.S. Virgin Islands',
    IS: 'Iceland',
    IR: 'Iran',
    AM: 'Armenia',
    AL: 'Albania',
    AO: 'Angola',
    AQ: 'Antarctica',
    AS: 'American Samoa',
    AR: 'Argentina',
    AU: 'Australia',
    AT: 'Austria',
    AW: 'Aruba',
    IN: 'India',
    AX: 'Aland Islands',
    AZ: 'Azerbaijan',
    IE: 'Ireland',
    ID: 'Indonesia',
    UA: 'Ukraine',
    QA: 'Qatar',
    MZ: 'Mozambique',
  };

  function getCountryCode(country_name) {
    for (const code in countriesArray) {
      if (countriesArray[code] === country_name) {
        return code;
      }
    }
    return null;
  }

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch('https://api.spotiprem.com/api/v1/stock', {
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((res) => res.json());
      setCountries(response.stock);
    };
    fetchCountries();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!key || !email || !password || !country) {
      return toast({
        title: 'Missing data',
        description: 'Please fill all required data.',
        status: 'error',
        duration: 7000,
        isClosable: true,
      });
    }

    try {
      setIsLoading(true);

      const response = await fetch('https://api.spotiprem.com/api/v1/upgrade', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          key,
          email,
          password,
          country,
        }),
      }).then((res) => res.json());

      return toast({
        title: response.status === 'success' ? 'Success' : 'Error',
        description: response.message + '.',
        status: response.status === 'success' ? 'success' : 'error',
        duration: 7000,
        isClosable: true,
      });
    } catch (error) {
      console.error(error);
      return toast({
        title: 'Error',
        description:
          'An unexpected error has ocurred while sending upgrade request, contact us!',
        status: 'error',
        duration: 7000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className='pt-[80px]'>
      <section id='pricing' className='relative z-10 w-full text-white py-2'>
        <div className='container pt-10 w-full'>
          <SectionTitle2
            title={() => {
              return (
                <>
                  Enjoy offline{' '}
                  <span className='text-[#6EE755]'>streaming</span> now
                </>
              );
            }}
            paragraph='Upgrade your Spotify account to premium within just a few seconds with our powerful tool.'
            center
            width='805px'
            mb='20px'
            lineImgSrc
          />
          <div className='flex flex-col justify-start items-start w-full lg:flex-row-reverse flex-wrap'>
            <div className='flex flex-col justify-center  mt-10 just xs:w-full lg:w-1/2'>
              <div className='flex justify-center w-10/12 md:justify-start'>
                <img className='h-16 md:h-24' src={num1} />
                <h2 className='mb-10 ml-8 text-2xl md:text-5xl power font-bold'>
                  AUTOMATED UPGRADING
                </h2>
              </div>
              <div className='text-sm'>
                The customer provides the purchased key, Spotify account login,
                and Spotify account password. Our system then logs into the
                customer's account and handles all the necessary tasks on behalf
                of the customer.
              </div>
              <img src={songImg} alt='' />
            </div>
            <div className='px-4 xs:w-full lg:w-1/2'>
              <div className='mx-2 lg:mx-12  rounded-[64px] '>
                <form onSubmit={handleSubmit}>
                  <div className='mb-4'>
                    <label
                      htmlFor='email'
                      className='block mb-3 text-sm font-medium text-normal dark:text-white'
                    >
                      Upgrade key
                    </label>
                    <input
                      placeholder='Enter your key'
                      className='border-[#1ED760] pr-6 pl-4 py-3 w-full text-base bg-transparent rounded-lg border outline-none placeholder-normal focus:border-primary'
                      onChange={(e) => setKey(e.target.value)}
                      value={key}
                    />
                  </div>
                  <div className='mb-4'>
                    <label
                      htmlFor='password'
                      className='block mb-3 text-sm font-medium text-normal dark:text-white'
                    >
                      Email Address
                    </label>
                    <input
                      placeholder='Enter your email'
                      className='border-[#1ED760] pr-6 pl-4 py-3 w-full text-base bg-transparent rounded-lg border outline-none placeholder-normal focus:border-primary'
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                  </div>
                  <div className='mb-4'>
                    <label
                      htmlFor='password'
                      className='block mb-3 text-sm font-medium text-normal dark:text-white'
                    >
                      Password
                    </label>
                    <input
                      type='password'
                      placeholder='Enter your password'
                      className='border-[#1ED760] pr-6 pl-4 py-3 w-full text-base bg-transparent rounded-lg border outline-none placeholder-normal focus:border-primary'
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                    />
                  </div>
                  <div className='mb-4'>
                    <label
                      htmlFor='country'
                      className='block mb-3 text-sm font-medium text-normal dark:text-white'
                    >
                      Country
                    </label>
                    <select
                      className='border-[#1ED760] pr-6 pl-4 py-3 w-full text-base bg-transparent rounded-lg border outline-none placeholder-normal focus:border-primary'
                      onChange={(e) => setCountry(e.target.value)}
                    >
                      <option className='text-black bg-primary' value=''>
                        Select your country
                      </option>
                      {countries.map((country) => {
                        return (
                          <option
                            value={getCountryCode(country) ?? ''}
                            key={getCountryCode(country)}
                            style={{ background: '#1e1e1e' }}
                          >
                            {country}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className='mb-6'>
                    <button
                      type='submit'
                      className='flex justify-center items-center px-9 py-4 w-full text-base text-black rounded-xl transition duration-300 ease-in-out bg-primary hover:bg-opacity-80 hover:shadow-signUp power font-bold mt-5'
                      disabled={isLoading}
                    >
                      Upgrade Account
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className='mt-20'>
            <Purchase />
          </div>
        </div>
      </section>
    </div>
  );
}
