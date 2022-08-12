// src/mocks/handlers.js
import { rest } from 'msw';

export const handlers = [
  rest.get('https://charity-search-303800.ue.r.appspot.com/', (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=237370133&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'CHARLOTTE',
          ein: '237370133',
          irsClassification: {
            deductibility: 'Contributions are not deductible',
            subsection: '501(c)(3)',
            assetAmount: null,
            nteeType: null,
            nteeSuffix: null,
            incomeAmount: null,
            filingRequirement: '990 - Not required to file (church) ',
            classification: 'Religious Organization',
            latest990: null,
            rulingDate: 'July, 1963',
            nteeCode: null,
            groupName:
              'GENERAL BOARD OF THE CHURCH OF THE NAZARENE                           ',
            affiliation:
              'Subordinate - the organization is a subordinate in a group ruling.',
            deductibilityCode: '2',
            foundationStatus: 'Church 170(b)(1)(A)(i)',
            nteeClassification: null,
            accountingPeriod: 'December',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: null,
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'MI',
            city: 'CHARLOTTE',
            postalCode: '48813-1567',
            streetAddress1: '302 E LOVETT ST',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/237370133/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'CHARLOTTE',
            ein: '237370133',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=237370133&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/237370133',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=043493343&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Charlotte Foundation',
          ein: '043493343',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 6205380,
            nteeType: 'Philanthropy, Voluntarism and Grantmaking Foundations',
            nteeSuffix: null,
            incomeAmount: 877225,
            filingRequirement: 'Required to file form 990-PF',
            classification: 'Charitable Organization',
            latest990: 'December, 2020',
            rulingDate: 'August, 2000',
            nteeCode: 'T22',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus: 'Private non-operating foundation',
            nteeClassification: 'Private Independent Foundations',
            accountingPeriod: 'December',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'T',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'MA',
            city: 'BOSTON',
            postalCode: '02110-2321',
            streetAddress1: '100 HIGH STREET 27TH FLOOR',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/043493343/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Charlotte Foundation',
            ein: '043493343',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=043493343&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/043493343',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=046107990&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Charlotte Home',
          ein: '046107990',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 1176234,
            nteeType: null,
            nteeSuffix: null,
            incomeAmount: 300336,
            filingRequirement: 'Required to file form 990-PF',
            classification: 'Charitable Organization',
            latest990: 'December, 2020',
            rulingDate: 'July, 1935',
            nteeCode: null,
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus: 'Private non-operating foundation',
            nteeClassification: null,
            accountingPeriod: 'December',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: null,
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'MA',
            city: 'NORTH ANDOVER',
            postalCode: '01845-0111',
            streetAddress1: 'PO BOX 111',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/046107990/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Charlotte Home',
            ein: '046107990',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=046107990&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/046107990',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=202550894&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Charlotte Succession',
          ein: '202550894',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 0,
            nteeType: 'Philanthropy, Voluntarism and Grantmaking Foundations',
            nteeSuffix: null,
            incomeAmount: 0,
            filingRequirement:
              '990 - Required to file Form 990-N - Income less than $50,000 per year',
            classification: 'Charitable Organization',
            latest990: 'December, 2020',
            rulingDate: 'March, 2006',
            nteeCode: 'T30',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus:
              'Organization which receives a substantial part of its support from a governmental unit or the general public   170(b)(1)(A)(vi)',
            nteeClassification: 'Public Foundations',
            accountingPeriod: 'December',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'T',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'CHARLOTTE',
            postalCode: '28220-1525',
            streetAddress1: 'PO BOX 11525',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/202550894/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Charlotte Succession',
            ein: '202550894',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=202550894&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/202550894',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=812451536&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Share Charlotte',
          ein: '812451536',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 355022,
            nteeType: 'Community Improvement, Capacity Building',
            nteeSuffix: null,
            incomeAmount: 440055,
            filingRequirement: '990 (all other) or 990EZ return',
            classification: 'Charitable Organization',
            latest990: 'December, 2021',
            rulingDate: 'July, 2016',
            nteeCode: 'S20',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus:
              'Organization which receives a substantial part of its support from a governmental unit or the general public   170(b)(1)(A)(vi)',
            nteeClassification:
              'Community, Neighborhood Development, Improvement (General)',
            accountingPeriod: 'December',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'S',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'CHARLOTTE',
            postalCode: '28209-1786',
            streetAddress1: '2820 SELWYN AVE STE 130',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/812451536/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Share Charlotte',
            ein: '812451536',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=812451536&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/812451536',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=821270092&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Flo Charlotte',
          ein: '821270092',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 0,
            nteeType: 'Community Improvement, Capacity Building',
            nteeSuffix: null,
            incomeAmount: 0,
            filingRequirement:
              '990 - Required to file Form 990-N - Income less than $50,000 per year',
            classification: 'Charitable Organization',
            latest990: 'December, 2021',
            rulingDate: 'May, 2017',
            nteeCode: 'S81',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus:
              'Organization that normally receives no more than one-third of its support from gross investment income and unrelated business income and at the same time more than one-third of its support from contributions, fees, and gross receipts related to exempt purposes.  509(a)(2)',
            nteeClassification: "Women's Service Clubs",
            accountingPeriod: 'December',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'S',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'HUNTERSVILLE',
            postalCode: '28078-6098',
            streetAddress1: '15206 LIBERTY RIDGE LN',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/821270092/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Flo Charlotte',
            ein: '821270092',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=821270092&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/821270092',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=823073175&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Oaks Charlotte',
          ein: '823073175',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 1304434,
            nteeType: 'Educational Institutions and Related Activities',
            nteeSuffix: null,
            incomeAmount: 1318180,
            filingRequirement: '990 (all other) or 990EZ return',
            classification: 'Educational Organization',
            latest990: 'June, 2021',
            rulingDate: 'November, 2018',
            nteeCode: 'B20',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus: 'School 170(b)(1)(A)(ii)',
            nteeClassification: 'Elementary, Secondary Education, K - 12',
            accountingPeriod: 'June',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'B',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'CHARLOTTE',
            postalCode: '28211-2806',
            streetAddress1: '338 S SHARON AMITY ROAD NO 326',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/823073175/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Oaks Charlotte',
            ein: '823073175',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=823073175&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/823073175',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=825244772&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Rally Charlotte',
          ein: '825244772',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 462868,
            nteeType: 'Recreation, Sports, Leisure, Athletics',
            nteeSuffix: null,
            incomeAmount: 925325,
            filingRequirement: '990 (all other) or 990EZ return',
            classification: 'Charitable Organization',
            latest990: 'December, 2020',
            rulingDate: 'November, 2018',
            nteeCode: 'N31',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus:
              'Organization which receives a substantial part of its support from a governmental unit or the general public   170(b)(1)(A)(vi)',
            nteeClassification: 'Community Recreational Centers',
            accountingPeriod: 'December',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'N',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'CHARLOTTE',
            postalCode: '28202-1760',
            streetAddress1: '301 W 10TH ST APT 205',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/825244772/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Rally Charlotte',
            ein: '825244772',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=825244772&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/825244772',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=300507479&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'CHARLOTTE ASSEMBLY',
          ein: '300507479',
          irsClassification: {
            deductibility: 'Contributions are not deductible',
            subsection: '501(c)(7)',
            assetAmount: 269247,
            nteeType: 'Recreation, Sports, Leisure, Athletics',
            nteeSuffix: null,
            incomeAmount: 162744,
            filingRequirement: '990 (all other) or 990EZ return',
            classification: 'Pleasure, Recreational, or Social Club',
            latest990: 'January, 2021',
            rulingDate: 'February, 2009',
            nteeCode: 'N50',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '2',
            foundationStatus: 'All organizations except 501(c)(3)',
            nteeClassification: 'Recreational, Pleasure, or Social Club',
            accountingPeriod: 'January',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'N',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'CHARLOTTE',
            postalCode: '28207-2308',
            streetAddress1: '640 COLVILLE RD',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/300507479/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'CHARLOTTE ASSEMBLY',
            ein: '300507479',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=300507479&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/300507479',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=371562943&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Charlotte Cruisers',
          ein: '371562943',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 0,
            nteeType: 'Human Services - Multipurpose and Other',
            nteeSuffix: '4',
            incomeAmount: 0,
            filingRequirement:
              '990 - Required to file Form 990-N - Income less than $50,000 per year',
            classification: 'Charitable Organization',
            latest990: 'December, 2021',
            rulingDate: 'August, 2008',
            nteeCode: 'P11',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus:
              'Organization that normally receives no more than one-third of its support from gross investment income and unrelated business income and at the same time more than one-third of its support from contributions, fees, and gross receipts related to exempt purposes.  509(a)(2)',
            nteeClassification: 'Single Organization Support ',
            accountingPeriod: 'December',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'P',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'MI',
            city: 'CHARLOTTE',
            postalCode: '48813-0024',
            streetAddress1: 'PO BOX 24',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/371562943/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Charlotte Cruisers',
            ein: '371562943',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=371562943&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/371562943',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=061801739&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Autism Charlotte',
          ein: '061801739',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 536845,
            nteeType: 'Diseases, Disorders, Medical Disciplines',
            nteeSuffix: null,
            incomeAmount: 526651,
            filingRequirement: '990 (all other) or 990EZ return',
            classification: 'Educational Organization',
            latest990: 'June, 2021',
            rulingDate: 'December, 2007',
            nteeCode: 'G84',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus:
              'Organization which receives a substantial part of its support from a governmental unit or the general public   170(b)(1)(A)(vi)',
            nteeClassification: 'Autism',
            accountingPeriod: 'June',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'G',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'CHARLOTTE',
            postalCode: '28220-0000',
            streetAddress1: 'PO BOX 121671',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/061801739/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Autism Charlotte',
            ein: '061801739',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=061801739&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/061801739',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=271728470&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Jazzarts Charlotte',
          ein: '271728470',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 582316,
            nteeType: 'Arts, Culture and Humanities',
            nteeSuffix: null,
            incomeAmount: 453450,
            filingRequirement: '990 (all other) or 990EZ return',
            classification: 'Charitable Organization',
            latest990: 'June, 2021',
            rulingDate: 'July, 2010',
            nteeCode: 'A68',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus:
              'Organization which receives a substantial part of its support from a governmental unit or the general public   170(b)(1)(A)(vi)',
            nteeClassification: 'Music',
            accountingPeriod: 'June',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'A',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'CHARLOTTE',
            postalCode: '28202-0000',
            streetAddress1: 'VAPA CENTER 700 N TRYON ST',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/271728470/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Jazzarts Charlotte',
            ein: '271728470',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=271728470&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/271728470',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=452763386&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Envision Charlotte',
          ein: '452763386',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 567958,
            nteeType: 'Environmental Quality, Protection and Beautification ',
            nteeSuffix: null,
            incomeAmount: 530514,
            filingRequirement: '990 (all other) or 990EZ return',
            classification: 'Charitable Organization',
            latest990: 'December, 2020',
            rulingDate: 'September, 2011',
            nteeCode: 'C30',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus:
              'Organization which receives a substantial part of its support from a governmental unit or the general public   170(b)(1)(A)(vi)',
            nteeClassification: 'Natural Resources Conservation and Protection',
            accountingPeriod: 'December',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'C',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'CHARLOTTE',
            postalCode: '28205-2745',
            streetAddress1: '932 SEIGLE AVE',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/452763386/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Envision Charlotte',
            ein: '452763386',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=452763386&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/452763386',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=472302870&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Urbanpromise Charlotte',
          ein: '472302870',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 755521,
            nteeType: 'Youth Development',
            nteeSuffix: null,
            incomeAmount: 1848909,
            filingRequirement: '990 (all other) or 990EZ return',
            classification: 'Charitable Organization',
            latest990: 'June, 2021',
            rulingDate: 'June, 2015',
            nteeCode: 'O50',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus:
              'Organization which receives a substantial part of its support from a governmental unit or the general public   170(b)(1)(A)(vi)',
            nteeClassification: 'Youth Development Programs, Other',
            accountingPeriod: 'June',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'O',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'CHARLOTTE',
            postalCode: '28220-2213',
            streetAddress1: 'PO BOX 12213',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/472302870/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Urbanpromise Charlotte',
            ein: '472302870',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=472302870&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/472302870',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=474918008&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Makerspace Charlotte',
          ein: '474918008',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 15537,
            nteeType: 'Educational Institutions and Related Activities',
            nteeSuffix: null,
            incomeAmount: 67028,
            filingRequirement: '990 (all other) or 990EZ return',
            classification: 'Charitable Organization',
            latest990: 'December, 2019',
            rulingDate: 'June, 2019',
            nteeCode: 'B99',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus:
              'Organization that normally receives no more than one-third of its support from gross investment income and unrelated business income and at the same time more than one-third of its support from contributions, fees, and gross receipts related to exempt purposes.  509(a)(2)',
            nteeClassification: 'Education N.E.C.',
            accountingPeriod: 'December',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'B',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'CHARLOTTE',
            postalCode: '28217-0974',
            streetAddress1: '900 PRESSLEY RD',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/474918008/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Makerspace Charlotte',
            ein: '474918008',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=474918008&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/474918008',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=561684782&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Leadership Charlotte',
          ein: '561684782',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 611266,
            nteeType: 'Arts, Culture and Humanities',
            nteeSuffix: 'Z',
            incomeAmount: 414448,
            filingRequirement: '990 (all other) or 990EZ return',
            classification: 'Charitable Organization',
            latest990: 'June, 2021',
            rulingDate: 'June, 1990',
            nteeCode: 'A99',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus:
              'Organization that normally receives no more than one-third of its support from gross investment income and unrelated business income and at the same time more than one-third of its support from contributions, fees, and gross receipts related to exempt purposes.  509(a)(2)',
            nteeClassification: 'Arts, Culture, and Humanities N.E.C.',
            accountingPeriod: 'June',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'A',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'CHARLOTTE',
            postalCode: '28220-1757',
            streetAddress1: 'PO BOX 11757',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/561684782/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Leadership Charlotte',
            ein: '561684782',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=561684782&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/561684782',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=562098251&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Charlotte Works',
          ein: '562098251',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 2593477,
            nteeType: 'Employment, Job-Related',
            nteeSuffix: '2',
            incomeAmount: 8510036,
            filingRequirement: '990 (all other) or 990EZ return',
            classification: 'Charitable Organization',
            latest990: 'June, 2021',
            rulingDate: 'February, 1999',
            nteeCode: 'J01',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus:
              'Organization which receives a substantial part of its support from a governmental unit or the general public   170(b)(1)(A)(vi)',
            nteeClassification: 'Alliance/Advocacy Organizations ',
            accountingPeriod: 'June',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'J',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'CHARLOTTE',
            postalCode: '28211-6301',
            streetAddress1: '8601 MCALPINE PARK DR SUITE 130',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/562098251/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Charlotte Works',
            ein: '562098251',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=562098251&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/562098251',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.summary&orgid=8986&utm_source=DataAPI&utm_content=2ee11478',
          mission:
            "Charlotte Ballet's (formerly the North Carolina Dance Theater) mission is to provide artistically excellent programming to diverse audiences in its home city of Charlotte, the Southeast region, and to the varied communities it serves while on tour across the nation. Charlotte Ballet has received critical recognition nationally for excellence in programming, education and outreach, and dance training.",
          websiteURL: 'http://charlotteballet.org/',
          tagLine: 'Performing, inspiring, educating',
          charityName: 'Charlotte Ballet',
          ein: '581314711',
          currentRating: {
            score: 87.82,
            ratingImage: {
              small:
                'https://d20umu42aunjpx.cloudfront.net/_gfx_/icons/stars/3starsb.png',
              large: 'https://d20umu42aunjpx.cloudfront.net/_gfx_/icons/stars/3stars.png',
            },
            rating: 3,
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/581314711/Ratings/164452',
              },
            },
            financialRating: { score: 86.76, rating: 3 },
            accountabilityRating: { score: 89, rating: 3 },
          },
          category: {
            categoryName: 'Arts, Culture, Humanities',
            categoryID: 2,
            charityNavigatorURL:
              'https://www.charitynavigator.org/index.cfm?bay=search.categories&categoryid=2&utm_source=DataAPI&utm_content=2ee11478',
            image:
              'https://d20umu42aunjpx.cloudfront.net/_gfx_/icons/categories/arts.png?utm_source=DataAPI&utm_content=2ee11478',
          },
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 20235608,
            nteeType: 'Arts, Culture and Humanities',
            nteeSuffix: '0',
            incomeAmount: 4763253,
            filingRequirement: '990 (all other) or 990EZ return',
            classification: 'Charitable Organization',
            latest990: 'June, 2021',
            rulingDate: 'March, 1978',
            nteeCode: 'A62',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus:
              'Organization which receives a substantial part of its support from a governmental unit or the general public   170(b)(1)(A)(vi)',
            nteeClassification: 'Dance',
            accountingPeriod: 'June',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'A',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'Charlotte',
            postalCode: '28205',
            streetAddress1: '701 North Tryon Street',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/581314711/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Charlotte Ballet',
            ein: '581314711',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.summary&orgid=8986&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/581314711',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=461846154&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Bsides Charlotte',
          ein: '461846154',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 0,
            nteeType: 'Educational Institutions and Related Activities',
            nteeSuffix: null,
            incomeAmount: 0,
            filingRequirement:
              '990 - Required to file Form 990-N - Income less than $50,000 per year',
            classification: 'Charitable Organization',
            latest990: 'December, 2021',
            rulingDate: 'March, 2017',
            nteeCode: 'B80',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus:
              'Organization which receives a substantial part of its support from a governmental unit or the general public   170(b)(1)(A)(vi)',
            nteeClassification: 'Student Services, Organizations of Students',
            accountingPeriod: 'December',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'B',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'MATTHEWS',
            postalCode: '28106-3073',
            streetAddress1: 'PO BOX 3073',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/461846154/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Bsides Charlotte',
            ein: '461846154',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=461846154&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/461846154',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=474250706&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Charlotte Awake',
          ein: '474250706',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: null,
            nteeType: 'Religion-Related, Spiritual Development',
            nteeSuffix: null,
            incomeAmount: null,
            filingRequirement: '990 - Not required to file (church) ',
            classification: 'Religious Organization',
            latest990: null,
            rulingDate: 'August, 2015',
            nteeCode: 'X20',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus: 'Church 170(b)(1)(A)(i)',
            nteeClassification: 'Christian',
            accountingPeriod: 'December',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'X',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'CHARLOTTE',
            postalCode: '28273-9103',
            streetAddress1: '14542 CHOATE CIR',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/474250706/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Charlotte Awake',
            ein: '474250706',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=474250706&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/474250706',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=475163669&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Charlotte Heptathlon',
          ein: '475163669',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 0,
            nteeType: 'Philanthropy, Voluntarism and Grantmaking Foundations',
            nteeSuffix: null,
            incomeAmount: 0,
            filingRequirement: '990 (all other) or 990EZ return',
            classification: 'Charitable Organization',
            latest990: 'December, 2021',
            rulingDate: 'April, 2016',
            nteeCode: 'T50',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus:
              'Organization which receives a substantial part of its support from a governmental unit or the general public   170(b)(1)(A)(vi)',
            nteeClassification: 'Philanthropy, Charity, Voluntarism Promotion, General',
            accountingPeriod: 'December',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'T',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'CHARLOTTE',
            postalCode: '28202-0209',
            streetAddress1: '525 N TRYON ST STE 1900',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/475163669/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Charlotte Heptathlon',
            ein: '475163669',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=475163669&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/475163669',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=562044549&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'CHARLOTTE NORTHSIDE',
          ein: '562044549',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: null,
            nteeType: null,
            nteeSuffix: null,
            incomeAmount: null,
            filingRequirement: '990 - Not required to file (church) ',
            classification: 'Religious Organization',
            latest990: null,
            rulingDate: 'October, 1972',
            nteeCode: null,
            groupName:
              'CHURCH OF GOD                                                         ',
            affiliation:
              'Subordinate - the organization is a subordinate in a group ruling.',
            deductibilityCode: '1',
            foundationStatus: 'Church 170(b)(1)(A)(i)',
            nteeClassification: null,
            accountingPeriod: 'August',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: null,
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'IRON STATION',
            postalCode: '28080-9404',
            streetAddress1: '5231 ARDEN GATE DR',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/562044549/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'CHARLOTTE NORTHSIDE',
            ein: '562044549',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=562044549&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/562044549',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=562264089&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Charlotte Aikikai',
          ein: '562264089',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 0,
            nteeType: 'Educational Institutions and Related Activities',
            nteeSuffix: null,
            incomeAmount: 0,
            filingRequirement:
              '990 - Required to file Form 990-N - Income less than $50,000 per year',
            classification: 'Charitable Organization',
            latest990: 'December, 2021',
            rulingDate: 'February, 2007',
            nteeCode: 'B99',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus: 'School 170(b)(1)(A)(ii)',
            nteeClassification: 'Education N.E.C.',
            accountingPeriod: 'December',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'B',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'CHARLOTTE',
            postalCode: '28215-2223',
            streetAddress1: '5357 RUTH DR',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/562264089/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Charlotte Aikikai',
            ein: '562264089',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=562264089&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/562264089',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=870750910&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Citychurch Charlotte',
          ein: '870750910',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: null,
            nteeType: 'Religion-Related, Spiritual Development',
            nteeSuffix: null,
            incomeAmount: null,
            filingRequirement: '990 - Not required to file (church) ',
            classification: 'Religious Organization',
            latest990: 'December, 2013',
            rulingDate: 'April, 2006',
            nteeCode: 'X21',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus: 'Church 170(b)(1)(A)(i)',
            nteeClassification: 'Protestant',
            accountingPeriod: 'December',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'X',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'CHARLOTTE',
            postalCode: '28205-5214',
            streetAddress1: '2300 MCCLINTOCK RD',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/870750910/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Citychurch Charlotte',
            ein: '870750910',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=870750910&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/870750910',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=561128184&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'CHARLOTTE-NORTHSIDE',
          ein: '561128184',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: null,
            nteeType: null,
            nteeSuffix: null,
            incomeAmount: null,
            filingRequirement: '990 - Not required to file (church) ',
            classification: 'Religious Organization',
            latest990: null,
            rulingDate: 'October, 1972',
            nteeCode: null,
            groupName:
              'CHURCH OF GOD                                                         ',
            affiliation:
              'Subordinate - the organization is a subordinate in a group ruling.',
            deductibilityCode: '1',
            foundationStatus: 'Church 170(b)(1)(A)(i)',
            nteeClassification: null,
            accountingPeriod: 'August',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: null,
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'CHARLOTTE',
            postalCode: '28262-3131',
            streetAddress1: '6401 RUMPLE RD',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/561128184/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'CHARLOTTE-NORTHSIDE',
            ein: '561128184',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=561128184&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/561128184',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=561339505&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Charlotte Church',
          ein: '561339505',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: null,
            nteeType: null,
            nteeSuffix: null,
            incomeAmount: null,
            filingRequirement: '990 - Not required to file (church) ',
            classification: 'Religious Organization',
            latest990: 'December, 2013',
            rulingDate: 'December, 1993',
            nteeCode: null,
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus: 'Church 170(b)(1)(A)(i)',
            nteeClassification: null,
            accountingPeriod: 'December',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: null,
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'CHARLOTTE',
            postalCode: '28203-0001',
            streetAddress1: '1800 CAMDEN RD STE 107 # 275',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/561339505/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Charlotte Church',
            ein: '561339505',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=561339505&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/561339505',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=853372254&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Lead Charlotte',
          ein: '853372254',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: null,
            nteeType: 'Public, Society Benefit - Multipurpose and Other',
            nteeSuffix: null,
            incomeAmount: null,
            filingRequirement: 'Required to file form 990-PF',
            classification: 'Educational Organization',
            latest990: null,
            rulingDate: 'December, 2020',
            nteeCode: 'W70',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus: 'Private non-operating foundation',
            nteeClassification: 'Leadership Development',
            accountingPeriod: 'September',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'W',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'CHARLOTTE',
            postalCode: '28212-4403',
            streetAddress1: '1127 CEDARWOOD LN',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/853372254/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Lead Charlotte',
            ein: '853372254',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=853372254&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/853372254',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=851918718&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Charlotte Adkins',
          ein: '851918718',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: null,
            nteeType: 'Educational Institutions and Related Activities',
            nteeSuffix: null,
            incomeAmount: null,
            filingRequirement:
              '990 - Required to file Form 990-N - Income less than $50,000 per year',
            classification: 'Charitable Organization',
            latest990: null,
            rulingDate: 'March, 2021',
            nteeCode: 'B99',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus:
              'Organization that normally receives no more than one-third of its support from gross investment income and unrelated business income and at the same time more than one-third of its support from contributions, fees, and gross receipts related to exempt purposes.  509(a)(2)',
            nteeClassification: 'Education N.E.C.',
            accountingPeriod: 'December',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'B',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'AR',
            city: 'BENTONVILLE',
            postalCode: '72713-8475',
            streetAddress1: '3104 SW WINDRIFT AVE NUM 2',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/851918718/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Charlotte Adkins',
            ein: '851918718',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=851918718&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/851918718',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=811965660&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Charlotte Norml',
          ein: '811965660',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 0,
            nteeType: 'Crime, Legal-Related',
            nteeSuffix: null,
            incomeAmount: 0,
            filingRequirement:
              '990 - Required to file Form 990-N - Income less than $50,000 per year',
            classification: 'Educational Organization',
            latest990: 'December, 2019',
            rulingDate: 'May, 2019',
            nteeCode: 'I99',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus:
              'Organization which receives a substantial part of its support from a governmental unit or the general public   170(b)(1)(A)(vi)',
            nteeClassification: 'Crime, Legal Related N.E.C.',
            accountingPeriod: 'December',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'I',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'WINSTON SALEM',
            postalCode: '27116-7185',
            streetAddress1: 'PO BOX 17185',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/811965660/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Charlotte Norml',
            ein: '811965660',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=811965660&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/811965660',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=813840985&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Charlotte Cupboard',
          ein: '813840985',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 0,
            nteeType: 'Philanthropy, Voluntarism and Grantmaking Foundations',
            nteeSuffix: null,
            incomeAmount: 0,
            filingRequirement:
              '990 - Required to file Form 990-N - Income less than $50,000 per year',
            classification: 'Charitable Organization',
            latest990: 'December, 2020',
            rulingDate: 'September, 2016',
            nteeCode: 'T50',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus:
              'Organization that normally receives no more than one-third of its support from gross investment income and unrelated business income and at the same time more than one-third of its support from contributions, fees, and gross receipts related to exempt purposes.  509(a)(2)',
            nteeClassification: 'Philanthropy, Charity, Voluntarism Promotion, General',
            accountingPeriod: 'December',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'T',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'TX',
            city: 'PORT ARTHUR',
            postalCode: '77642-1845',
            streetAddress1: '1919 JEFFERSON DR',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/813840985/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Charlotte Cupboard',
            ein: '813840985',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=813840985&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/813840985',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=814484855&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'FORWARD CHARLOTTE',
          ein: '814484855',
          irsClassification: {
            deductibility: 'Contributions are not deductible',
            subsection: '501(c)(4)',
            assetAmount: 0,
            nteeType: 'Community Improvement, Capacity Building',
            nteeSuffix: null,
            incomeAmount: 0,
            filingRequirement:
              '990 - Required to file Form 990-N - Income less than $50,000 per year',
            classification: 'Civic League',
            latest990: 'December, 2021',
            rulingDate: 'April, 2017',
            nteeCode: 'S20',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '2',
            foundationStatus: 'All organizations except 501(c)(3)',
            nteeClassification:
              'Community, Neighborhood Development, Improvement (General)',
            accountingPeriod: 'December',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'S',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'RALEIGH',
            postalCode: '27615-3257',
            streetAddress1: '8510 SIX FORKS RD STE 102',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/814484855/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'FORWARD CHARLOTTE',
            ein: '814484855',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=814484855&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/814484855',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=823539811&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Bienvenue Charlotte',
          ein: '823539811',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 0,
            nteeType: 'Arts, Culture and Humanities',
            nteeSuffix: null,
            incomeAmount: 0,
            filingRequirement:
              '990 - Required to file Form 990-N - Income less than $50,000 per year',
            classification: 'Educational Organization',
            latest990: 'December, 2021',
            rulingDate: 'December, 2017',
            nteeCode: 'A20',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus:
              'Organization that normally receives no more than one-third of its support from gross investment income and unrelated business income and at the same time more than one-third of its support from contributions, fees, and gross receipts related to exempt purposes.  509(a)(2)',
            nteeClassification: 'Arts, Cultural Organizations - Multipurpose',
            accountingPeriod: 'December',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'A',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'CHARLOTTE',
            postalCode: '28278-7302',
            streetAddress1: '14337 CROWN HARBOR DR',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/823539811/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Bienvenue Charlotte',
            ein: '823539811',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=823539811&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/823539811',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=830748415&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Aboutface Charlotte',
          ein: '830748415',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 5161,
            nteeType: 'Youth Development',
            nteeSuffix: null,
            incomeAmount: 5360,
            filingRequirement:
              '990 - Required to file Form 990-N - Income less than $50,000 per year',
            classification: 'Charitable Organization',
            latest990: 'December, 2019',
            rulingDate: 'June, 2019',
            nteeCode: 'O99',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus:
              'Organization which receives a substantial part of its support from a governmental unit or the general public   170(b)(1)(A)(vi)',
            nteeClassification: 'Youth Development N.E.C.',
            accountingPeriod: 'December',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'O',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'HUNTERSVILLE',
            postalCode: '28078-0000',
            streetAddress1: 'C/O 13016 EASTFIELD RD',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/830748415/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Aboutface Charlotte',
            ein: '830748415',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=830748415&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/830748415',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=832118860&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Innovate Charlotte',
          ein: '832118860',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 59787,
            nteeType: 'Educational Institutions and Related Activities',
            nteeSuffix: null,
            incomeAmount: 90659,
            filingRequirement: '990 (all other) or 990EZ return',
            classification: 'Educational Organization',
            latest990: 'December, 2019',
            rulingDate: 'June, 2019',
            nteeCode: 'B90',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus:
              'Organization which receives a substantial part of its support from a governmental unit or the general public   170(b)(1)(A)(vi)',
            nteeClassification: 'Educational Services and Schools - Other',
            accountingPeriod: 'December',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'B',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'CHARLOTTE',
            postalCode: '28204-2147',
            streetAddress1: '933 LOUISE AVENUE',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/832118860/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Innovate Charlotte',
            ein: '832118860',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=832118860&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/832118860',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=843496803&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Charlotte Singers',
          ein: '843496803',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 0,
            nteeType: 'Arts, Culture and Humanities',
            nteeSuffix: null,
            incomeAmount: 0,
            filingRequirement:
              '990 - Required to file Form 990-N - Income less than $50,000 per year',
            classification: 'Charitable Organization',
            latest990: 'December, 2021',
            rulingDate: 'December, 2019',
            nteeCode: 'A6B',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus:
              'Organization that normally receives no more than one-third of its support from gross investment income and unrelated business income and at the same time more than one-third of its support from contributions, fees, and gross receipts related to exempt purposes.  509(a)(2)',
            nteeClassification: 'Singing, Choral',
            accountingPeriod: 'December',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'A',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'CHARLOTTE',
            postalCode: '28270-0491',
            streetAddress1: '4145 ASHLEYTOWN LN',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/843496803/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Charlotte Singers',
            ein: '843496803',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=843496803&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/843496803',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=815158164&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Heal Charlotte',
          ein: '815158164',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 35711,
            nteeType: 'Community Improvement, Capacity Building',
            nteeSuffix: null,
            incomeAmount: 97584,
            filingRequirement:
              '990 - Required to file Form 990-N - Income less than $50,000 per year',
            classification: 'Charitable Organization',
            latest990: 'December, 2019',
            rulingDate: 'April, 2017',
            nteeCode: 'S20',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus:
              'Organization which receives a substantial part of its support from a governmental unit or the general public   170(b)(1)(A)(vi)',
            nteeClassification:
              'Community, Neighborhood Development, Improvement (General)',
            accountingPeriod: 'December',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'S',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'CHARLOTTE',
            postalCode: '28269-9439',
            streetAddress1: '3936 SAXONBURY WAY',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/815158164/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Heal Charlotte',
            ein: '815158164',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=815158164&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/815158164',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=200271591&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Charlotte Chorale Inc.',
          ein: '200271591',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 0,
            nteeType: 'Arts, Culture and Humanities',
            nteeSuffix: null,
            incomeAmount: 0,
            filingRequirement:
              '990 - Required to file Form 990-N - Income less than $50,000 per year',
            classification: 'Charitable Organization',
            latest990: 'June, 2021',
            rulingDate: 'August, 2004',
            nteeCode: 'A6B',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus:
              'Organization which receives a substantial part of its support from a governmental unit or the general public   170(b)(1)(A)(vi)',
            nteeClassification: 'Singing, Choral',
            accountingPeriod: 'June',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'A',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'INDIAN TRAIL',
            postalCode: '28079-4334',
            streetAddress1: '6002 HEMBY COMMONS PKWY',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/200271591/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Charlotte Chorale Inc.',
            ein: '200271591',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=200271591&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/200271591',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=260105505&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Charlotte Youth Center',
          ein: '260105505',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 0,
            nteeType: 'Youth Development',
            nteeSuffix: null,
            incomeAmount: 0,
            filingRequirement:
              '990 - Required to file Form 990-N - Income less than $50,000 per year',
            classification: 'Charitable Organization',
            latest990: 'December, 2019',
            rulingDate: 'March, 2015',
            nteeCode: 'O50',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus:
              'Organization that normally receives no more than one-third of its support from gross investment income and unrelated business income and at the same time more than one-third of its support from contributions, fees, and gross receipts related to exempt purposes.  509(a)(2)',
            nteeClassification: 'Youth Development Programs, Other',
            accountingPeriod: 'December',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'O',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'CHARLOTTE',
            postalCode: '28216-4300',
            streetAddress1: '2127 BEATTIES FORD RD',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/260105505/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Charlotte Youth Center',
            ein: '260105505',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=260105505&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/260105505',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=261781095&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Charlotte Dance Festival',
          ein: '261781095',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 0,
            nteeType: 'Arts, Culture and Humanities',
            nteeSuffix: null,
            incomeAmount: 0,
            filingRequirement:
              '990 - Required to file Form 990-N - Income less than $50,000 per year',
            classification: 'Educational Organization',
            latest990: 'December, 2021',
            rulingDate: 'May, 2008',
            nteeCode: 'A62',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus:
              'Organization which receives a substantial part of its support from a governmental unit or the general public   170(b)(1)(A)(vi)',
            nteeClassification: 'Dance',
            accountingPeriod: 'December',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'A',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'CHARLOTTE',
            postalCode: '28278-8023',
            streetAddress1: '10515 HAWICK CT',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/261781095/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Charlotte Dance Festival',
            ein: '261781095',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=261781095&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/261781095',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=263498099&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Charlotte Malayalee Association',
          ein: '263498099',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 0,
            nteeType: 'Arts, Culture and Humanities',
            nteeSuffix: null,
            incomeAmount: 0,
            filingRequirement:
              '990 - Required to file Form 990-N - Income less than $50,000 per year',
            classification: 'Charitable Organization',
            latest990: 'December, 2021',
            rulingDate: 'May, 2018',
            nteeCode: 'A23',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus:
              'Organization that normally receives no more than one-third of its support from gross investment income and unrelated business income and at the same time more than one-third of its support from contributions, fees, and gross receipts related to exempt purposes.  509(a)(2)',
            nteeClassification: 'Cultural, Ethnic Awareness',
            accountingPeriod: 'December',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'A',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'CHARLOTTE',
            postalCode: '28202-0027',
            streetAddress1: 'PO BOX 20106',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/263498099/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Charlotte Malayalee Association',
            ein: '263498099',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=263498099&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/263498099',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=264735241&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Charlotte Black Pride',
          ein: '264735241',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 0,
            nteeType: 'Human Services - Multipurpose and Other',
            nteeSuffix: null,
            incomeAmount: 0,
            filingRequirement:
              '990 - Required to file Form 990-N - Income less than $50,000 per year',
            classification: 'Charitable Organization',
            latest990: 'July, 2021',
            rulingDate: 'August, 2009',
            nteeCode: 'P20',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus:
              'Organization that normally receives no more than one-third of its support from gross investment income and unrelated business income and at the same time more than one-third of its support from contributions, fees, and gross receipts related to exempt purposes.  509(a)(2)',
            nteeClassification: 'Human Service Organizations - Multipurpose',
            accountingPeriod: 'July',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'P',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'CHARLOTTE',
            postalCode: '28216-2859',
            streetAddress1: '5009 BEATTIES FORD RD',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/264735241/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Charlotte Black Pride',
            ein: '264735241',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=264735241&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/264735241',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=264785323&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Bld Charlotte Foundation',
          ein: '264785323',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: null,
            nteeType: 'Religion-Related, Spiritual Development',
            nteeSuffix: null,
            incomeAmount: null,
            filingRequirement: '990 - Not required to file (church) ',
            classification: 'Religious Organization',
            latest990: null,
            rulingDate: 'February, 2010',
            nteeCode: 'X20',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus: 'Church 170(b)(1)(A)(i)',
            nteeClassification: 'Christian',
            accountingPeriod: 'December',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'X',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'GREENSBORO',
            postalCode: '27410-0000',
            streetAddress1: '5309 CARDINAL WAY',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/264785323/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Bld Charlotte Foundation',
            ein: '264785323',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=264785323&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/264785323',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=823547898&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Roc Charlotte Inc.',
          ein: '823547898',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 1051863,
            nteeType: 'Educational Institutions and Related Activities',
            nteeSuffix: null,
            incomeAmount: 936840,
            filingRequirement: '990 (all other) or 990EZ return',
            classification: 'Educational Organization',
            latest990: 'June, 2021',
            rulingDate: 'July, 2018',
            nteeCode: 'B30',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus:
              'Organization which receives a substantial part of its support from a governmental unit or the general public   170(b)(1)(A)(vi)',
            nteeClassification: 'Vocational, Technical Schools',
            accountingPeriod: 'June',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'B',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'CHARLOTTE',
            postalCode: '28208-0807',
            streetAddress1: '1335 ALLEGHANY ST',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/823547898/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Roc Charlotte Inc.',
            ein: '823547898',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=823547898&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/823547898',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=824729146&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Foster Village Charlotte',
          ein: '824729146',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 492100,
            nteeType: 'Human Services - Multipurpose and Other',
            nteeSuffix: null,
            incomeAmount: 412249,
            filingRequirement: '990 (all other) or 990EZ return',
            classification: 'Charitable Organization',
            latest990: 'December, 2021',
            rulingDate: 'April, 2018',
            nteeCode: 'P30',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus:
              'Organization which receives a substantial part of its support from a governmental unit or the general public   170(b)(1)(A)(vi)',
            nteeClassification: "Children's, Youth Services",
            accountingPeriod: 'December',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'P',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'CHARLOTTE',
            postalCode: '28271-7015',
            streetAddress1: 'PO BOX 77672',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/824729146/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Foster Village Charlotte',
            ein: '824729146',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=824729146&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/824729146',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=830354527&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Charlotte Gardens Inc.',
          ein: '830354527',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 814394,
            nteeType: 'Philanthropy, Voluntarism and Grantmaking Foundations',
            nteeSuffix: null,
            incomeAmount: 119116,
            filingRequirement: '990 (all other) or 990EZ return',
            classification: 'Charitable Organization',
            latest990: 'June, 2021',
            rulingDate: 'March, 2004',
            nteeCode: 'T70',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus:
              'Organization that normally receives no more than one-third of its support from gross investment income and unrelated business income and at the same time more than one-third of its support from contributions, fees, and gross receipts related to exempt purposes.  509(a)(2)',
            nteeClassification: 'Fund Raising Organizations That Cross Categories',
            accountingPeriod: 'June',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'T',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'AR',
            city: 'LITTLE ROCK',
            postalCode: '72212-2495',
            streetAddress1: '3920 WOODLAND HEIGHTS RD',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/830354527/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Charlotte Gardens Inc.',
            ein: '830354527',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=830354527&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/830354527',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=010497113&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Charlotte Historical Society',
          ein: '010497113',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 0,
            nteeType: 'Arts, Culture and Humanities',
            nteeSuffix: null,
            incomeAmount: 0,
            filingRequirement:
              '990 - Required to file Form 990-N - Income less than $50,000 per year',
            classification: 'Educational Organization',
            latest990: 'December, 2021',
            rulingDate: 'April, 1998',
            nteeCode: 'A80',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus:
              'Organization which receives a substantial part of its support from a governmental unit or the general public   170(b)(1)(A)(vi)',
            nteeClassification: 'Historical Societies, Related Historical Activities',
            accountingPeriod: 'December',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'A',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'ME',
            city: 'CHARLOTTE',
            postalCode: '04666-6307',
            streetAddress1: '9 ANNAS DR',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/010497113/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Charlotte Historical Society',
            ein: '010497113',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=010497113&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/010497113',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=010853533&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'CHARLOTTE ECONOMICS CLUB',
          ein: '010853533',
          irsClassification: {
            deductibility: 'Contributions are not deductible',
            subsection: '501(c)(6)',
            assetAmount: 0,
            nteeType: 'Community Improvement, Capacity Building',
            nteeSuffix: null,
            incomeAmount: 0,
            filingRequirement:
              '990 - Required to file Form 990-N - Income less than $50,000 per year',
            classification: 'Business League',
            latest990: 'December, 2021',
            rulingDate: 'May, 2014',
            nteeCode: 'S03',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '2',
            foundationStatus: 'All organizations except 501(c)(3)',
            nteeClassification: 'Professional Societies, Associations ',
            accountingPeriod: 'December',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'S',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'CHARLOTTE',
            postalCode: '28270-1815',
            streetAddress1: '6936 HUNTFIELD DR',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/010853533/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'CHARLOTTE ECONOMICS CLUB',
            ein: '010853533',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=010853533&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/010853533',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=030370291&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'CHARLOTTE NEWS INC',
          ein: '030370291',
          irsClassification: {
            deductibility: 'Contributions are not deductible',
            subsection: '501(c)(4)',
            assetAmount: 38011,
            nteeType: 'Arts, Culture and Humanities',
            nteeSuffix: null,
            incomeAmount: 119536,
            filingRequirement: '990 (all other) or 990EZ return',
            classification: 'Civic League',
            latest990: 'December, 2020',
            rulingDate: 'July, 2006',
            nteeCode: 'A33',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '2',
            foundationStatus: 'All organizations except 501(c)(3)',
            nteeClassification: 'Printing, Publishing',
            accountingPeriod: 'December',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'A',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'VT',
            city: 'CHARLOTTE',
            postalCode: '05445-0251',
            streetAddress1: 'PO BOX 251',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/030370291/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'CHARLOTTE NEWS INC',
            ein: '030370291',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=030370291&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/030370291',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=205057429&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Charlotte Celiac Connection',
          ein: '205057429',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 0,
            nteeType: 'Health - General and Rehabilitative',
            nteeSuffix: null,
            incomeAmount: 0,
            filingRequirement:
              '990 - Required to file Form 990-N - Income less than $50,000 per year',
            classification: 'Charitable Organization',
            latest990: 'December, 2021',
            rulingDate: 'May, 2007',
            nteeCode: 'E86',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus:
              'Organization which receives a substantial part of its support from a governmental unit or the general public   170(b)(1)(A)(vi)',
            nteeClassification: 'Patient Services - Entertainment, Recreation',
            accountingPeriod: 'December',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'E',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'SC',
            city: 'FORT MILL',
            postalCode: '29708-6475',
            streetAddress1: '320 SUGAR RIDGE CT',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/205057429/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Charlotte Celiac Connection',
            ein: '205057429',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=205057429&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/205057429',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=204813229&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Ekklesia Charlotte Inc.',
          ein: '204813229',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: null,
            nteeType: 'Religion-Related, Spiritual Development',
            nteeSuffix: null,
            incomeAmount: null,
            filingRequirement: '990 - Not required to file (church) ',
            classification: 'Religious Organization',
            latest990: null,
            rulingDate: 'May, 2007',
            nteeCode: 'X20',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus: 'Church 170(b)(1)(A)(i)',
            nteeClassification: 'Christian',
            accountingPeriod: 'December',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'X',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'CHARLOTTE',
            postalCode: '28277-9863',
            streetAddress1: '8316 RAINTREE LN',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/204813229/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Ekklesia Charlotte Inc.',
            ein: '204813229',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=204813229&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/204813229',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=208226000&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Csi Charlotte Foundation',
          ein: '208226000',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 113271,
            nteeType: 'Educational Institutions and Related Activities',
            nteeSuffix: null,
            incomeAmount: 637,
            filingRequirement:
              '990 - Required to file Form 990-N - Income less than $50,000 per year',
            classification: 'Educational Organization',
            latest990: 'June, 2019',
            rulingDate: 'June, 2009',
            nteeCode: 'B82',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus:
              'Organizations operated solely for the benefit of and in conjunction with organizations described in 10 through 16 above.  509(a)(3)',
            nteeClassification: 'Scholarships, Student Financial Aid Services, Awards',
            accountingPeriod: 'June',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'B',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'CHARLOTTE',
            postalCode: '28202-2226',
            streetAddress1: '501 N CHURCH STREET',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/208226000/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Csi Charlotte Foundation',
            ein: '208226000',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=208226000&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/208226000',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=231280780&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Charlotte Cushman Foundation',
          ein: '231280780',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 402623,
            nteeType: 'Educational Institutions and Related Activities',
            nteeSuffix: null,
            incomeAmount: 31002,
            filingRequirement: 'Required to file form 990-PF',
            classification: 'Charitable Organization',
            latest990: 'December, 2020',
            rulingDate: 'February, 1945',
            nteeCode: 'B82',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus: 'Private non-operating foundation',
            nteeClassification: 'Scholarships, Student Financial Aid Services, Awards',
            accountingPeriod: 'December',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'B',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'PA',
            city: 'PHILADELPHIA',
            postalCode: '19106-0027',
            streetAddress1: 'PO BOX 40027',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/231280780/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Charlotte Cushman Foundation',
            ein: '231280780',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=231280780&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/231280780',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=270535096&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Suit Up Charlotte',
          ein: '270535096',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 0,
            nteeType: 'Religion-Related, Spiritual Development',
            nteeSuffix: null,
            incomeAmount: 0,
            filingRequirement:
              '990 - Required to file Form 990-N - Income less than $50,000 per year',
            classification: 'Educational Organization',
            latest990: 'December, 2021',
            rulingDate: 'August, 2014',
            nteeCode: 'X99',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus:
              'Organization which receives a substantial part of its support from a governmental unit or the general public   170(b)(1)(A)(vi)',
            nteeClassification: 'Religion Related, Spiritual Development N.E.C.',
            accountingPeriod: 'December',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'X',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'CHARLOTTE',
            postalCode: '28208-3847',
            streetAddress1: '2801 CRISMAN ST',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/270535096/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Suit Up Charlotte',
            ein: '270535096',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=270535096&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/270535096',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=270347616&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'ISPI CHARLOTTE CHAPTER',
          ein: '270347616',
          irsClassification: {
            deductibility: 'Contributions are not deductible',
            subsection: '501(c)(6)',
            assetAmount: 0,
            nteeType: 'Community Improvement, Capacity Building',
            nteeSuffix: null,
            incomeAmount: 0,
            filingRequirement:
              '990 - Required to file Form 990-N - Income less than $50,000 per year',
            classification: 'Business League',
            latest990: 'December, 2021',
            rulingDate: 'June, 2011',
            nteeCode: 'S41',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '2',
            foundationStatus: 'All organizations except 501(c)(3)',
            nteeClassification: 'Promotion of Business',
            accountingPeriod: 'December',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'S',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'CHARLOTTE',
            postalCode: '28262-6406',
            streetAddress1: '8801 J M KEYNES DR STE 320',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/270347616/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'ISPI CHARLOTTE CHAPTER',
            ein: '270347616',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=270347616&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/270347616',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=270692097&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Charlotte Running Club',
          ein: '270692097',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 0,
            nteeType: null,
            nteeSuffix: null,
            incomeAmount: 0,
            filingRequirement:
              '990 - Required to file Form 990-N - Income less than $50,000 per year',
            classification: 'Charitable Organization',
            latest990: 'December, 2021',
            rulingDate: 'September, 2014',
            nteeCode: null,
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus:
              'Organization that normally receives no more than one-third of its support from gross investment income and unrelated business income and at the same time more than one-third of its support from contributions, fees, and gross receipts related to exempt purposes.  509(a)(2)',
            nteeClassification: null,
            accountingPeriod: 'December',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: null,
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'CHARLOTTE',
            postalCode: '28234-4763',
            streetAddress1: 'PO BOX 34763',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/270692097/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Charlotte Running Club',
            ein: '270692097',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=270692097&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/270692097',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=271707856&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Charlotte Christman Foundation',
          ein: '271707856',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 1001,
            nteeType: 'Philanthropy, Voluntarism and Grantmaking Foundations',
            nteeSuffix: null,
            incomeAmount: 2000,
            filingRequirement: 'Required to file form 990-PF',
            classification: 'Charitable Organization',
            latest990: 'December, 2021',
            rulingDate: 'March, 2010',
            nteeCode: 'T22',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus: 'Private non-operating foundation',
            nteeClassification: 'Private Independent Foundations',
            accountingPeriod: 'December',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'T',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'TX',
            city: 'HOUSTON',
            postalCode: '77270-1159',
            streetAddress1: 'PO BOX 701159',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/271707856/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Charlotte Christman Foundation',
            ein: '271707856',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=271707856&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/271707856',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=271901667&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Charlotte Fellows Program',
          ein: '271901667',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 67939,
            nteeType: 'Religion-Related, Spiritual Development',
            nteeSuffix: null,
            incomeAmount: 64374,
            filingRequirement: '990 (all other) or 990EZ return',
            classification: 'Educational Organization',
            latest990: 'December, 2020',
            rulingDate: 'November, 2010',
            nteeCode: 'X20',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus:
              'Organization that normally receives no more than one-third of its support from gross investment income and unrelated business income and at the same time more than one-third of its support from contributions, fees, and gross receipts related to exempt purposes.  509(a)(2)',
            nteeClassification: 'Christian',
            accountingPeriod: 'December',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'X',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'CHARLOTTE',
            postalCode: '28204-3469',
            streetAddress1: '1010 KENILWORTH AVE APT 316',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/271901667/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Charlotte Fellows Program',
            ein: '271901667',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=271901667&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/271901667',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=273233051&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Charlotte Concert Band',
          ein: '273233051',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 0,
            nteeType: 'Arts, Culture and Humanities',
            nteeSuffix: null,
            incomeAmount: 0,
            filingRequirement:
              '990 - Required to file Form 990-N - Income less than $50,000 per year',
            classification: 'Charitable Organization',
            latest990: 'June, 2021',
            rulingDate: 'May, 2011',
            nteeCode: 'A68',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus:
              'Organization which receives a substantial part of its support from a governmental unit or the general public   170(b)(1)(A)(vi)',
            nteeClassification: 'Music',
            accountingPeriod: 'June',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'A',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'CHARLOTTE',
            postalCode: '28203-0001',
            streetAddress1: '1800 CAMDEN RD STE 107 # 219',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/273233051/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Charlotte Concert Band',
            ein: '273233051',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=273233051&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/273233051',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=273319192&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Charlotte Film Society',
          ein: '273319192',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 548981,
            nteeType: 'Arts, Culture and Humanities',
            nteeSuffix: null,
            incomeAmount: 434739,
            filingRequirement: '990 (all other) or 990EZ return',
            classification: 'Charitable Organization',
            latest990: 'December, 2021',
            rulingDate: 'October, 2016',
            nteeCode: 'A31',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus:
              'Organization that normally receives no more than one-third of its support from gross investment income and unrelated business income and at the same time more than one-third of its support from contributions, fees, and gross receipts related to exempt purposes.  509(a)(2)',
            nteeClassification: 'Film, Video',
            accountingPeriod: 'December',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'A',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'CHARLOTTE',
            postalCode: '28277-8613',
            streetAddress1: '3908 WOODFOX DR',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/273319192/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Charlotte Film Society',
            ein: '273319192',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=273319192&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/273319192',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=320406361&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Charlotte County Apva',
          ein: '320406361',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 0,
            nteeType: 'Arts, Culture and Humanities',
            nteeSuffix: null,
            incomeAmount: 0,
            filingRequirement:
              '990 - Required to file Form 990-N - Income less than $50,000 per year',
            classification: 'Charitable Organization',
            latest990: 'December, 2021',
            rulingDate: 'May, 2014',
            nteeCode: 'A99',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus:
              'Organization that normally receives no more than one-third of its support from gross investment income and unrelated business income and at the same time more than one-third of its support from contributions, fees, and gross receipts related to exempt purposes.  509(a)(2)',
            nteeClassification: 'Arts, Culture, and Humanities N.E.C.',
            accountingPeriod: 'December',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'A',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'VA',
            city: 'CHARLOTTE CH',
            postalCode: '23923-0104',
            streetAddress1: 'PO BOX 104',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/320406361/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Charlotte County Apva',
            ein: '320406361',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=320406361&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/320406361',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=352380910&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Charlotte Pride Band',
          ein: '352380910',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 0,
            nteeType: 'Arts, Culture and Humanities',
            nteeSuffix: null,
            incomeAmount: 0,
            filingRequirement:
              '990 - Required to file Form 990-N - Income less than $50,000 per year',
            classification: 'Charitable Organization',
            latest990: 'June, 2021',
            rulingDate: 'August, 2010',
            nteeCode: 'A68',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus:
              'Organization which receives a substantial part of its support from a governmental unit or the general public   170(b)(1)(A)(vi)',
            nteeClassification: 'Music',
            accountingPeriod: 'June',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'A',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'CHARLOTTE',
            postalCode: '28220-1566',
            streetAddress1: 'PO BOX 11566',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/352380910/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Charlotte Pride Band',
            ein: '352380910',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=352380910&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/352380910',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=371501837&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Charlotte Court Inc.',
          ein: '371501837',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 0,
            nteeType: 'Mutual/Membership Benefit Organizations, Other',
            nteeSuffix: null,
            incomeAmount: 0,
            filingRequirement:
              '990 - Required to file Form 990-N - Income less than $50,000 per year',
            classification: 'Charitable Organization',
            latest990: 'December, 2020',
            rulingDate: 'May, 2014',
            nteeCode: 'Y99',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus:
              'Organization that normally receives no more than one-third of its support from gross investment income and unrelated business income and at the same time more than one-third of its support from contributions, fees, and gross receipts related to exempt purposes.  509(a)(2)',
            nteeClassification: 'Mutual/Membership Benefit Organizations, Other N.E.C.',
            accountingPeriod: 'December',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'Y',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'KY',
            city: 'LEXINGTON',
            postalCode: '40515-4627',
            streetAddress1: '222 QUEBEC WAY',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/371501837/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Charlotte Court Inc.',
            ein: '371501837',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=371501837&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/371501837',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=412124938&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Charlotte County Soccer',
          ein: '412124938',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 0,
            nteeType: 'Youth Development',
            nteeSuffix: null,
            incomeAmount: 0,
            filingRequirement:
              '990 - Required to file Form 990-N - Income less than $50,000 per year',
            classification: 'Charitable Organization',
            latest990: 'June, 2021',
            rulingDate: 'July, 2012',
            nteeCode: 'O50',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus:
              'Organization that normally receives no more than one-third of its support from gross investment income and unrelated business income and at the same time more than one-third of its support from contributions, fees, and gross receipts related to exempt purposes.  509(a)(2)',
            nteeClassification: 'Youth Development Programs, Other',
            accountingPeriod: 'June',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'O',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'VA',
            city: 'KEYSVILLE',
            postalCode: '23947-0053',
            streetAddress1: 'PO BOX 53',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/412124938/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Charlotte County Soccer',
            ein: '412124938',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=412124938&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/412124938',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=421542082&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Charlotte Contemporary Ensemble',
          ein: '421542082',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 0,
            nteeType: 'Arts, Culture and Humanities',
            nteeSuffix: null,
            incomeAmount: 0,
            filingRequirement:
              '990 - Required to file Form 990-N - Income less than $50,000 per year',
            classification: 'Charitable Organization',
            latest990: 'December, 2019',
            rulingDate: 'January, 2003',
            nteeCode: 'A6B',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus:
              'Organization which receives a substantial part of its support from a governmental unit or the general public   170(b)(1)(A)(vi)',
            nteeClassification: 'Singing, Choral',
            accountingPeriod: 'December',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'A',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'CHARLOTTE',
            postalCode: '28256-1124',
            streetAddress1: 'PO BOX 561124',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/421542082/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Charlotte Contemporary Ensemble',
            ein: '421542082',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=421542082&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/421542082',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=453163764&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Legacy Church Charlotte',
          ein: '453163764',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: null,
            nteeType: 'Religion-Related, Spiritual Development',
            nteeSuffix: null,
            incomeAmount: null,
            filingRequirement: '990 - Not required to file (church) ',
            classification: 'Charitable Organization',
            latest990: null,
            rulingDate: 'March, 2015',
            nteeCode: 'X20',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus: 'Church 170(b)(1)(A)(i)',
            nteeClassification: 'Christian',
            accountingPeriod: 'December',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'X',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'GASTONIA',
            postalCode: '28054-1368',
            streetAddress1: '2544 ARROWHEAD CIR',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/453163764/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Legacy Church Charlotte',
            ein: '453163764',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=453163764&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/453163764',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=453702556&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'CHARLOTTE IOWA CLUB',
          ein: '453702556',
          irsClassification: {
            deductibility: 'Contributions are not deductible',
            subsection: '501(c)(7)',
            assetAmount: 0,
            nteeType: 'Recreation, Sports, Leisure, Athletics',
            nteeSuffix: null,
            incomeAmount: 0,
            filingRequirement:
              '990 - Required to file Form 990-N - Income less than $50,000 per year',
            classification: 'Pleasure, Recreational, or Social Club',
            latest990: 'June, 2021',
            rulingDate: 'September, 2012',
            nteeCode: 'N50',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '2',
            foundationStatus: 'All organizations except 501(c)(3)',
            nteeClassification: 'Recreational, Pleasure, or Social Club',
            accountingPeriod: 'June',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'N',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'CHARLOTTE',
            postalCode: '28211-0009',
            streetAddress1: '721 GOVERNOR MORRISON ST APT 551',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/453702556/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'CHARLOTTE IOWA CLUB',
            ein: '453702556',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=453702556&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/453702556',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=274331001&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Charlotte Swish Inc.',
          ein: '274331001',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: null,
            nteeType: 'Recreation, Sports, Leisure, Athletics',
            nteeSuffix: null,
            incomeAmount: null,
            filingRequirement:
              '990 - Required to file Form 990-N - Income less than $50,000 per year',
            classification: 'Charitable Organization',
            latest990: null,
            rulingDate: 'February, 2019',
            nteeCode: 'N60',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus:
              'Organization that normally receives no more than one-third of its support from gross investment income and unrelated business income and at the same time more than one-third of its support from contributions, fees, and gross receipts related to exempt purposes.  509(a)(2)',
            nteeClassification: 'Amateur Sports Clubs, Leagues, N.E.C.',
            accountingPeriod: 'December',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'N',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'FL',
            city: 'NORTH PORT',
            postalCode: '34287-5157',
            streetAddress1: '3610 WALMSLEY AVE',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/274331001/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Charlotte Swish Inc.',
            ein: '274331001',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=274331001&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/274331001',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=311743400&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Charlotte Torah Center',
          ein: '311743400',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: null,
            nteeType: 'Religion-Related, Spiritual Development',
            nteeSuffix: null,
            incomeAmount: null,
            filingRequirement: '990 - Not required to file (church) ',
            classification: 'Religious Organization',
            latest990: null,
            rulingDate: 'February, 2001',
            nteeCode: 'X30',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus: 'Church 170(b)(1)(A)(i)',
            nteeClassification: 'Jewish',
            accountingPeriod: 'December',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'X',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'CHARLOTTE',
            postalCode: '28226-4998',
            streetAddress1: '7804 FAIRVIEW ROAD STE 160',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/311743400/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Charlotte Torah Center',
            ein: '311743400',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=311743400&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/311743400',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=352463374&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Charlotte First Responders',
          ein: '352463374',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 0,
            nteeType: 'Health - General and Rehabilitative',
            nteeSuffix: null,
            incomeAmount: 0,
            filingRequirement:
              '990 - Required to file Form 990-N - Income less than $50,000 per year',
            classification: 'Charitable Organization',
            latest990: 'December, 2020',
            rulingDate: 'December, 2013',
            nteeCode: 'E70',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus:
              'Organization which receives a substantial part of its support from a governmental unit or the general public   170(b)(1)(A)(vi)',
            nteeClassification:
              'Public Health Program (Includes General Health and Wellness Promotion ',
            accountingPeriod: 'December',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'E',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'IA',
            city: 'CHARLOTTE',
            postalCode: '52731-9779',
            streetAddress1: '102 CHARLES ST',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/352463374/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Charlotte First Responders',
            ein: '352463374',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=352463374&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/352463374',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=380414060&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Charlotte Cemetery Company',
          ein: '380414060',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(13)',
            assetAmount: 1262589,
            nteeType: null,
            nteeSuffix: null,
            incomeAmount: 191741,
            filingRequirement: '990 (all other) or 990EZ return',
            classification: 'Cemetery Company',
            latest990: 'December, 2021',
            rulingDate: 'June, 1946',
            nteeCode: null,
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus: 'All organizations except 501(c)(3)',
            nteeClassification: null,
            accountingPeriod: 'December',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: null,
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'MI',
            city: 'CHARLOTTE',
            postalCode: '48813-8405',
            streetAddress1: '801 TULLY BROWN DR',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/380414060/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Charlotte Cemetery Company',
            ein: '380414060',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=380414060&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/380414060',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=383663743&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Charlotte Masjid Incorporated',
          ein: '383663743',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: null,
            nteeType: 'Religion-Related, Spiritual Development',
            nteeSuffix: null,
            incomeAmount: null,
            filingRequirement: '990 - Not required to file (church) ',
            classification: 'Religious Organization',
            latest990: null,
            rulingDate: 'November, 2009',
            nteeCode: 'X40',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus: 'Church 170(b)(1)(A)(i)',
            nteeClassification: 'Islamic',
            accountingPeriod: 'December',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'X',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'CHARLOTTE',
            postalCode: '28297-6720',
            streetAddress1: 'PO BOX 16720',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/383663743/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Charlotte Masjid Incorporated',
            ein: '383663743',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=383663743&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/383663743',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=386094563&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'CHARLOTTE MASONIC ASSOCIATION',
          ein: '386094563',
          irsClassification: {
            deductibility: 'Contributions are not deductible',
            subsection: '501(c)(2)',
            assetAmount: 200203,
            nteeType: null,
            nteeSuffix: null,
            incomeAmount: 44388,
            filingRequirement: '990 (all other) or 990EZ return',
            classification: 'Title-Holding Corporation',
            latest990: 'December, 2020',
            rulingDate: 'March, 1935',
            nteeCode: null,
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '2',
            foundationStatus: 'All organizations except 501(c)(3)',
            nteeClassification: null,
            accountingPeriod: 'December',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: null,
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'MI',
            city: 'CHARLOTTE',
            postalCode: '48813-0177',
            streetAddress1: 'PO BOX 177',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/386094563/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'CHARLOTTE MASONIC ASSOCIATION',
            ein: '386094563',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=386094563&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/386094563',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=010975452&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Sustain Charlotte Inc.',
          ein: '010975452',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 867287,
            nteeType: 'Community Improvement, Capacity Building',
            nteeSuffix: null,
            incomeAmount: 864122,
            filingRequirement: '990 (all other) or 990EZ return',
            classification: 'Charitable Organization',
            latest990: 'December, 2021',
            rulingDate: 'December, 2010',
            nteeCode: 'S31',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus:
              'Organization which receives a substantial part of its support from a governmental unit or the general public   170(b)(1)(A)(vi)',
            nteeClassification: 'Urban, Community Economic Development',
            accountingPeriod: 'December',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'S',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'CHARLOTTE',
            postalCode: '28203-4010',
            streetAddress1: '1100 S MINT ST STE 208',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/010975452/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Sustain Charlotte Inc.',
            ein: '010975452',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=010975452&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/010975452',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=060646678&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Charlotte Hungerford Hospital',
          ein: '060646678',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 188994381,
            nteeType: 'Health - General and Rehabilitative',
            nteeSuffix: '0',
            incomeAmount: 166278758,
            filingRequirement: '990 (all other) or 990EZ return',
            classification: 'Charitable Organization',
            latest990: 'September, 2020',
            rulingDate: 'May, 1942',
            nteeCode: 'E22',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus:
              'Hospital or medical research organization 170(b)(1)(A)(iii)',
            nteeClassification: 'Hospital, General',
            accountingPeriod: 'September',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'E',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'CT',
            city: 'TORRINGTON',
            postalCode: '06790-6679',
            streetAddress1: '540 LITCHFIELD ST',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/060646678/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Charlotte Hungerford Hospital',
            ein: '060646678',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=060646678&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/060646678',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=202421023&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Charlotte D McCarty',
          ein: '202421023',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 39517,
            nteeType: 'Educational Institutions and Related Activities',
            nteeSuffix: null,
            incomeAmount: 293693,
            filingRequirement: '990 (all other) or 990EZ return',
            classification: 'Educational Organization',
            latest990: 'December, 2020',
            rulingDate: 'October, 2014',
            nteeCode: 'B21',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus:
              'Organization that normally receives no more than one-third of its support from gross investment income and unrelated business income and at the same time more than one-third of its support from contributions, fees, and gross receipts related to exempt purposes.  509(a)(2)',
            nteeClassification:
              'Kindergarten, Preschool, Nursery School, Early Admissions',
            accountingPeriod: 'December',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'B',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'TX',
            city: 'LUBBOCK',
            postalCode: '79403-0000',
            streetAddress1: '918 ZENITH',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/202421023/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Charlotte D McCarty',
            ein: '202421023',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=202421023&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/202421023',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=205664061&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Kipp Charlotte Inc.',
          ein: '205664061',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 16558259,
            nteeType: 'Educational Institutions and Related Activities',
            nteeSuffix: null,
            incomeAmount: 20360204,
            filingRequirement: '990 (all other) or 990EZ return',
            classification: 'Charitable Organization',
            latest990: 'June, 2021',
            rulingDate: 'May, 2008',
            nteeCode: 'B25',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus: 'School 170(b)(1)(A)(ii)',
            nteeClassification: 'Secondary, High School',
            accountingPeriod: 'June',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'B',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'CHARLOTTE',
            postalCode: '28215-2147',
            streetAddress1: '931 WILANN DR',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/205664061/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Kipp Charlotte Inc.',
            ein: '205664061',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=205664061&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/205664061',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=222582271&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Charlotte White Center',
          ein: '222582271',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 0,
            nteeType: 'Human Services - Multipurpose and Other',
            nteeSuffix: null,
            incomeAmount: 0,
            filingRequirement:
              '990 - Required to file Form 990-N - Income less than $50,000 per year',
            classification: 'Charitable Organization',
            latest990: 'June, 2021',
            rulingDate: 'February, 1985',
            nteeCode: 'P82',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus:
              'Organization which receives a substantial part of its support from a governmental unit or the general public   170(b)(1)(A)(vi)',
            nteeClassification: 'Developmentally Disabled Centers, Services',
            accountingPeriod: 'June',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'P',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'ME',
            city: 'BANGOR',
            postalCode: '04402-1162',
            streetAddress1: 'PO BOX 1162',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/222582271/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Charlotte White Center',
            ein: '222582271',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=222582271&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/222582271',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=237087894&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Charlotte Players Inc.',
          ein: '237087894',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 368726,
            nteeType: 'Arts, Culture and Humanities',
            nteeSuffix: '0',
            incomeAmount: 275954,
            filingRequirement: '990 (all other) or 990EZ return',
            classification: 'Educational Organization',
            latest990: 'June, 2021',
            rulingDate: 'October, 1970',
            nteeCode: 'A65',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus:
              'Organization that normally receives no more than one-third of its support from gross investment income and unrelated business income and at the same time more than one-third of its support from contributions, fees, and gross receipts related to exempt purposes.  509(a)(2)',
            nteeClassification: 'Theater',
            accountingPeriod: 'June',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'A',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'FL',
            city: 'PORT CHARLOTTE',
            postalCode: '33953-3894',
            streetAddress1: '1182 MARKET CIR',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/237087894/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Charlotte Players Inc.',
            ein: '237087894',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=237087894&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/237087894',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=270040902&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Charlotte Street Foundation',
          ein: '270040902',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 10244255,
            nteeType: 'Arts, Culture and Humanities',
            nteeSuffix: null,
            incomeAmount: 3538239,
            filingRequirement: '990 (all other) or 990EZ return',
            classification: 'Educational Organization',
            latest990: 'December, 2020',
            rulingDate: 'March, 2004',
            nteeCode: 'A51',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus:
              'Organization which receives a substantial part of its support from a governmental unit or the general public   170(b)(1)(A)(vi)',
            nteeClassification: 'Art Museums',
            accountingPeriod: 'December',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'A',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'MO',
            city: 'KANSAS CITY',
            postalCode: '64171-0263',
            streetAddress1: 'PO BOX 10263',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/270040902/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Charlotte Street Foundation',
            ein: '270040902',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=270040902&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/270040902',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=271898356&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Greater Charlotte Spca',
          ein: '271898356',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 78154,
            nteeType: 'Animal-Related',
            nteeSuffix: null,
            incomeAmount: 312211,
            filingRequirement: '990 (all other) or 990EZ return',
            classification: 'Charitable Organization',
            latest990: 'December, 2020',
            rulingDate: 'April, 2010',
            nteeCode: 'D20',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus:
              'Organization which receives a substantial part of its support from a governmental unit or the general public   170(b)(1)(A)(vi)',
            nteeClassification: 'Animal Protection and Welfare',
            accountingPeriod: 'December',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'D',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'CHARLOTTE',
            postalCode: '28271-7011',
            streetAddress1: 'PO BOX 77491',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/271898356/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Greater Charlotte Spca',
            ein: '271898356',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=271898356&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/271898356',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=272056711&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Charlotte Curling Association',
          ein: '272056711',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 2106053,
            nteeType: 'Recreation, Sports, Leisure, Athletics',
            nteeSuffix: null,
            incomeAmount: 471150,
            filingRequirement: '990 (all other) or 990EZ return',
            classification: 'Charitable Organization',
            latest990: 'August, 2020',
            rulingDate: 'February, 2011',
            nteeCode: 'N71',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus:
              'Organization that normally receives no more than one-third of its support from gross investment income and unrelated business income and at the same time more than one-third of its support from contributions, fees, and gross receipts related to exempt purposes.  509(a)(2)',
            nteeClassification:
              'Olympics Committees and Related International Competitions',
            accountingPeriod: 'August',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'N',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'CHARLOTTE',
            postalCode: '28216-2859',
            streetAddress1: '5009 BEATTIES FORD ROAD',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/272056711/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Charlotte Curling Association',
            ein: '272056711',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=272056711&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/272056711',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=273665227&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Spay Neuter Charlotte',
          ein: '273665227',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 3275745,
            nteeType: 'Animal-Related',
            nteeSuffix: null,
            incomeAmount: 4829626,
            filingRequirement: '990 (all other) or 990EZ return',
            classification: 'Organization to Prevent Cruelty to Animals',
            latest990: 'December, 2020',
            rulingDate: 'January, 2011',
            nteeCode: 'D20',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus:
              'Organization that normally receives no more than one-third of its support from gross investment income and unrelated business income and at the same time more than one-third of its support from contributions, fees, and gross receipts related to exempt purposes.  509(a)(2)',
            nteeClassification: 'Animal Protection and Welfare',
            accountingPeriod: 'December',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'D',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'CHARLOTTE',
            postalCode: '28206-2210',
            streetAddress1: '224 W 32ND ST',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/273665227/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Spay Neuter Charlotte',
            ein: '273665227',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=273665227&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/273665227',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=274202998&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Charlotte City Market',
          ein: '274202998',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 1045529,
            nteeType: 'Health - General and Rehabilitative',
            nteeSuffix: null,
            incomeAmount: 436862,
            filingRequirement: '990 (all other) or 990EZ return',
            classification: 'Educational Organization',
            latest990: 'June, 2021',
            rulingDate: 'December, 2010',
            nteeCode: 'E70',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus:
              'Organization which receives a substantial part of its support from a governmental unit or the general public   170(b)(1)(A)(vi)',
            nteeClassification:
              'Public Health Program (Includes General Health and Wellness Promotion ',
            accountingPeriod: 'June',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'E',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'CHARLOTTE',
            postalCode: '28202-2572',
            streetAddress1: '225 E 6TH ST STE B',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/274202998/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Charlotte City Market',
            ein: '274202998',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=274202998&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/274202998',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=300842673&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Common Wealth Charlotte',
          ein: '300842673',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 1144814,
            nteeType: 'Educational Institutions and Related Activities',
            nteeSuffix: null,
            incomeAmount: 995368,
            filingRequirement: '990 (all other) or 990EZ return',
            classification: 'Educational Organization',
            latest990: 'June, 2021',
            rulingDate: 'February, 2015',
            nteeCode: 'B90',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus:
              'Organization which receives a substantial part of its support from a governmental unit or the general public   170(b)(1)(A)(vi)',
            nteeClassification: 'Educational Services and Schools - Other',
            accountingPeriod: 'June',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'B',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'CHARLOTTE',
            postalCode: '28208-5455',
            streetAddress1: '5301 WILKINSON BLVD',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/300842673/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Common Wealth Charlotte',
            ein: '300842673',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=300842673&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/300842673',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=364571824&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Watershed Charlotte Inc.',
          ein: '364571824',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 1911257,
            nteeType: 'Religion-Related, Spiritual Development',
            nteeSuffix: null,
            incomeAmount: 644892,
            filingRequirement: '990 - Not required to file (church) ',
            classification: 'Religious Organization',
            latest990: 'December, 2020',
            rulingDate: 'May, 2018',
            nteeCode: 'X20',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus: 'Church 170(b)(1)(A)(i)',
            nteeClassification: 'Christian',
            accountingPeriod: 'December',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'X',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'CHARLOTTE',
            postalCode: '28205-6021',
            streetAddress1: '2101 SHENANDOAH AVE',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/364571824/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Watershed Charlotte Inc.',
            ein: '364571824',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=364571824&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/364571824',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=454724039&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Charlotte Choice Charter',
          ein: '454724039',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 476128,
            nteeType: null,
            nteeSuffix: null,
            incomeAmount: 1185217,
            filingRequirement: '990 (all other) or 990EZ return',
            classification: 'Educational Organization',
            latest990: 'June, 2019',
            rulingDate: 'March, 2016',
            nteeCode: 'B29',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus: 'School 170(b)(1)(A)(ii)',
            nteeClassification: null,
            accountingPeriod: 'June',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'B',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'CHARLOTTE',
            postalCode: '28215-0035',
            streetAddress1: 'PO BOX 44065',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/454724039/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Charlotte Choice Charter',
            ein: '454724039',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=454724039&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/454724039',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=462059715&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Charlotte Sports Foundation',
          ein: '462059715',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 18202027,
            nteeType: 'Recreation, Sports, Leisure, Athletics',
            nteeSuffix: null,
            incomeAmount: 17786465,
            filingRequirement: '990 (all other) or 990EZ return',
            classification: 'Charitable Organization',
            latest990: 'March, 2021',
            rulingDate: 'June, 2014',
            nteeCode: 'N40',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus:
              'Organization which receives a substantial part of its support from a governmental unit or the general public   170(b)(1)(A)(vi)',
            nteeClassification: 'Sports Training Facilities, Agencies',
            accountingPeriod: 'March',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'N',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'CHARLOTTE',
            postalCode: '28209-0044',
            streetAddress1: '4250 CONGRESS ST STE 900',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/462059715/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Charlotte Sports Foundation',
            ein: '462059715',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=462059715&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/462059715',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=464239471&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Charlotte Education Foundation',
          ein: '464239471',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 17162280,
            nteeType: 'Educational Institutions and Related Activities',
            nteeSuffix: null,
            incomeAmount: 8684444,
            filingRequirement: '990 (all other) or 990EZ return',
            classification: 'Educational Organization',
            latest990: 'June, 2021',
            rulingDate: 'December, 2016',
            nteeCode: 'B20',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus: 'School 170(b)(1)(A)(ii)',
            nteeClassification: 'Elementary, Secondary Education, K - 12',
            accountingPeriod: 'June',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'B',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'CHARLOTTE',
            postalCode: '28262-6006',
            streetAddress1: '8701 MALLARD CREEK RD',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/464239471/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Charlotte Education Foundation',
            ein: '464239471',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=464239471&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/464239471',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=473489351&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Girls Rock Charlotte',
          ein: '473489351',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 41043,
            nteeType: 'Arts, Culture and Humanities',
            nteeSuffix: null,
            incomeAmount: 98438,
            filingRequirement: '990 (all other) or 990EZ return',
            classification: 'Charitable Organization',
            latest990: 'December, 2021',
            rulingDate: 'March, 2015',
            nteeCode: 'A25',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus:
              'Organization that normally receives no more than one-third of its support from gross investment income and unrelated business income and at the same time more than one-third of its support from contributions, fees, and gross receipts related to exempt purposes.  509(a)(2)',
            nteeClassification: 'Arts Education',
            accountingPeriod: 'December',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'A',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'CHARLOTTE',
            postalCode: '28206-3423',
            streetAddress1: '423 E 22ND ST',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/473489351/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Girls Rock Charlotte',
            ein: '473489351',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=473489351&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/473489351',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=474610791&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Transcend Charlotte Inc.',
          ein: '474610791',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 49512,
            nteeType: 'Human Services - Multipurpose and Other',
            nteeSuffix: null,
            incomeAmount: 95894,
            filingRequirement: '990 (all other) or 990EZ return',
            classification: 'Charitable Organization',
            latest990: 'June, 2021',
            rulingDate: 'August, 2016',
            nteeCode: 'P80',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus:
              'Organization which receives a substantial part of its support from a governmental unit or the general public   170(b)(1)(A)(vi)',
            nteeClassification:
              'Services to Promote the Independence of Specific Populations',
            accountingPeriod: 'June',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'P',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'CHARLOTTE',
            postalCode: '28205-7758',
            streetAddress1: '3800 MONROE ROAD',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/474610791/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Transcend Charlotte Inc.',
            ein: '474610791',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=474610791&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/474610791',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=475329696&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Charlotte is Creative',
          ein: '475329696',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 265786,
            nteeType: 'Arts, Culture and Humanities',
            nteeSuffix: null,
            incomeAmount: 545865,
            filingRequirement: '990 (all other) or 990EZ return',
            classification: 'Charitable Organization',
            latest990: 'December, 2021',
            rulingDate: 'December, 2017',
            nteeCode: 'A20',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus:
              'Organization which receives a substantial part of its support from a governmental unit or the general public   170(b)(1)(A)(vi)',
            nteeClassification: 'Arts, Cultural Organizations - Multipurpose',
            accountingPeriod: 'December',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'A',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'CHARLOTTE',
            postalCode: '28209-1785',
            streetAddress1: '2820 SELWYN AVE UNIT 603',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/475329696/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Charlotte is Creative',
            ein: '475329696',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=475329696&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/475329696',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.summary&orgid=7861&utm_source=DataAPI&utm_content=2ee11478',
          mission:
            "Charlotte Rescue Mission is a faith-based organization that serves people at the intersection of homelessness and addiction. We provide residential recovery services through Rebound (for men) and Dove's Nest (for women and children) at no cost to our residents. Graduates have the option to remain engaged with the Mission through our Recovery Living program, which affords participants the opportunity to remain in safe, recovery-oriented housing while working, savings money and planning for their future.",
          websiteURL: 'https://charlotterescuemission.org/',
          tagLine:
            'Residential substance abuse programs for men and women struggling with addiction, poverty, or hopelessness.  ',
          charityName: 'Charlotte Rescue Mission',
          ein: '560571223',
          currentRating: {
            score: 89.39,
            ratingImage: {
              small:
                'https://d20umu42aunjpx.cloudfront.net/_gfx_/icons/stars/3starsb.png',
              large: 'https://d20umu42aunjpx.cloudfront.net/_gfx_/icons/stars/3stars.png',
            },
            rating: 3,
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/560571223/Ratings/164082',
              },
            },
            financialRating: { score: 86.73, rating: 3 },
            accountabilityRating: { score: 93, rating: 4 },
          },
          category: {
            categoryName: 'Human Services',
            categoryID: 6,
            charityNavigatorURL:
              'https://www.charitynavigator.org/index.cfm?bay=search.categories&categoryid=6&utm_source=DataAPI&utm_content=2ee11478',
            image:
              'https://d20umu42aunjpx.cloudfront.net/_gfx_/icons/categories/health.png?utm_source=DataAPI&utm_content=2ee11478',
          },
          cause: {
            causeID: 44,
            causeName: 'Rescue Missions',
            charityNavigatorURL:
              'https://www.charitynavigator.org/index.cfm?bay=search.results&cgid=6&cuid=44&utm_source=DataAPI&utm_content=2ee11478',
            image:
              'https://d20umu42aunjpx.cloudfront.net/_gfx_/causes/small/rescue-missions-50x50.jpg?utm_source=DataAPI&utm_content=2ee11478',
          },
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 19401615,
            nteeType: 'Mental Health, Crisis Intervention',
            nteeSuffix: '0',
            incomeAmount: 13448756,
            filingRequirement: '990 (all other) or 990EZ return',
            classification: 'Charitable Organization',
            latest990: 'June, 2021',
            rulingDate: 'April, 1951',
            nteeCode: 'F22',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus:
              'Organization that normally receives no more than one-third of its support from gross investment income and unrelated business income and at the same time more than one-third of its support from contributions, fees, and gross receipts related to exempt purposes.  509(a)(2)',
            nteeClassification: 'Alcohol, Drug Abuse, Treatment Only',
            accountingPeriod: 'June',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'F',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'Charlotte',
            postalCode: '28202',
            streetAddress1: '907 W. First Street',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/560571223/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Charlotte Rescue Mission',
            ein: '560571223',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.summary&orgid=7861&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/560571223',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=560591306&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Theatre Charlotte Inc.',
          ein: '560591306',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 872073,
            nteeType: 'Arts, Culture and Humanities',
            nteeSuffix: '0',
            incomeAmount: 1021146,
            filingRequirement: '990 (all other) or 990EZ return',
            classification: 'Educational Organization',
            latest990: 'June, 2021',
            rulingDate: 'March, 1936',
            nteeCode: 'A65',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus:
              'Organization that normally receives no more than one-third of its support from gross investment income and unrelated business income and at the same time more than one-third of its support from contributions, fees, and gross receipts related to exempt purposes.  509(a)(2)',
            nteeClassification: 'Theater',
            accountingPeriod: 'June',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'A',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'CHARLOTTE',
            postalCode: '28207-1423',
            streetAddress1: '501 QUEENS RD',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/560591306/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Theatre Charlotte Inc.',
            ein: '560591306',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=560591306&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/560591306',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=560750913&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Charlotte Christian School',
          ein: '560750913',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 69171998,
            nteeType: null,
            nteeSuffix: null,
            incomeAmount: 26257653,
            filingRequirement: '990 (all other) or 990EZ return',
            classification: 'Educational Organization',
            latest990: 'June, 2021',
            rulingDate: 'November, 1972',
            nteeCode: null,
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus: 'School 170(b)(1)(A)(ii)',
            nteeClassification: null,
            accountingPeriod: 'June',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: null,
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'CHARLOTTE',
            postalCode: '28270-6063',
            streetAddress1: '7301 SARDIS RD',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/560750913/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Charlotte Christian School',
            ein: '560750913',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=560750913&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/560750913',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.summary&orgid=12478&utm_source=DataAPI&utm_content=2ee11478',
          mission:
            "Loaves & Fishes provides a week's worth of nutritionally balanced groceries to individuals and families in a short-term crisis through a network of 31 emergency food pantries located throughout Mecklenburg County.<br><br>Loaves & Fishes uses a Client Choice model which allows clients to select groceries their family is most likely to eat. Clients are able to choose a specified number of items in the areas of grains, proteins, vegetables, fruit, and dairy based on the size of the family. The number of choices is determined by a Registered Dietician to ensure that enough food is available to create three meals a day for a week. It is important to the dignity of our clients to feel they have some control and requires them to invest some time in the process. It also allows for greater interaction between clients and volunteers.<br>",
          websiteURL: 'http://www.loavesandfishes.org',
          tagLine: 'Groceries for neighbors in need',
          charityName: 'Loaves & Fishes, Charlotte',
          ein: '561398498',
          currentRating: {
            score: 100,
            ratingImage: {
              small:
                'https://d20umu42aunjpx.cloudfront.net/_gfx_/icons/stars/4starsb.png',
              large: 'https://d20umu42aunjpx.cloudfront.net/_gfx_/icons/stars/4stars.png',
            },
            rating: 4,
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/561398498/Ratings/165413',
              },
            },
            financialRating: { score: 100, rating: 4 },
            accountabilityRating: { score: 100, rating: 4 },
          },
          category: {
            categoryName: 'Human Services',
            categoryID: 6,
            charityNavigatorURL:
              'https://www.charitynavigator.org/index.cfm?bay=search.categories&categoryid=6&utm_source=DataAPI&utm_content=2ee11478',
            image:
              'https://d20umu42aunjpx.cloudfront.net/_gfx_/icons/categories/health.png?utm_source=DataAPI&utm_content=2ee11478',
          },
          cause: {
            causeID: 29,
            causeName: 'Social Services',
            charityNavigatorURL:
              'https://www.charitynavigator.org/index.cfm?bay=search.results&cgid=6&cuid=29&utm_source=DataAPI&utm_content=2ee11478',
            image:
              'https://d20umu42aunjpx.cloudfront.net/_gfx_/causes/small/social_services.gif?utm_source=DataAPI&utm_content=2ee11478',
          },
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 8805222,
            nteeType: 'Human Services - Multipurpose and Other',
            nteeSuffix: '0',
            incomeAmount: 9518617,
            filingRequirement: '990 (all other) or 990EZ return',
            classification: 'Charitable Organization',
            latest990: 'September, 2020',
            rulingDate: 'January, 1985',
            nteeCode: 'P60',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus:
              'Organization which receives a substantial part of its support from a governmental unit or the general public   170(b)(1)(A)(vi)',
            nteeClassification: 'Emergency Assistance (Food, Clothing, Cash)',
            accountingPeriod: 'September',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'P',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'Charlotte',
            postalCode: '28217',
            streetAddress1: '648 Griffith Road',
            streetAddress2: 'Suite B',
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/561398498/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Loaves & Fishes, Charlotte',
            ein: '561398498',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.summary&orgid=12478&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/561398498',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=561720167&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'New Charlotte Corporation',
          ein: '561720167',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 864949761,
            nteeType: 'Public, Society Benefit - Multipurpose and Other',
            nteeSuffix: '0',
            incomeAmount: 219396015,
            filingRequirement: '990 (all other) or 990EZ return',
            classification: 'Educational Organization',
            latest990: 'June, 2021',
            rulingDate: 'August, 1991',
            nteeCode: 'W19',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus:
              'Organization that normally receives no more than one-third of its support from gross investment income and unrelated business income and at the same time more than one-third of its support from contributions, fees, and gross receipts related to exempt purposes.  509(a)(2)',
            nteeClassification: 'Nonmonetary Support N.E.C.',
            accountingPeriod: 'June',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'W',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'CHARLOTTE',
            postalCode: '28202-2816',
            streetAddress1: '600 E 4TH ST',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/561720167/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'New Charlotte Corporation',
            ein: '561720167',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=561720167&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/561720167',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=561854461&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Charlotte Touchdown Club',
          ein: '561854461',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 2570690,
            nteeType: null,
            nteeSuffix: null,
            incomeAmount: 519211,
            filingRequirement: '990 (all other) or 990EZ return',
            classification: 'Charitable Organization',
            latest990: 'March, 2021',
            rulingDate: 'June, 1994',
            nteeCode: null,
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus:
              'Organization that normally receives no more than one-third of its support from gross investment income and unrelated business income and at the same time more than one-third of its support from contributions, fees, and gross receipts related to exempt purposes.  509(a)(2)',
            nteeClassification: null,
            accountingPeriod: 'March',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: null,
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'CHARLOTTE',
            postalCode: '28209-3716',
            streetAddress1: '4530 PARK RD',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/561854461/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Charlotte Touchdown Club',
            ein: '561854461',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=561854461&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/561854461',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=561887771&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Charlotte Soccer Academy',
          ein: '561887771',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 9129591,
            nteeType: 'Recreation, Sports, Leisure, Athletics',
            nteeSuffix: 'Z',
            incomeAmount: 7294165,
            filingRequirement: '990 (all other) or 990EZ return',
            classification: 'Charitable Organization',
            latest990: 'May, 2021',
            rulingDate: 'June, 1995',
            nteeCode: 'N64',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus:
              'Organization that normally receives no more than one-third of its support from gross investment income and unrelated business income and at the same time more than one-third of its support from contributions, fees, and gross receipts related to exempt purposes.  509(a)(2)',
            nteeClassification: 'Soccer Clubs, Leagues',
            accountingPeriod: 'May',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'N',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'PINEVILLE',
            postalCode: '28134-9336',
            streetAddress1: '13333 DORMAN RD',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/561887771/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Charlotte Soccer Academy',
            ein: '561887771',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=561887771&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/561887771',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.profile&ein=562225983&utm_source=DataAPI&utm_content=2ee11478',
          mission: null,
          websiteURL: null,
          tagLine: null,
          charityName: 'Charlotte Pride Inc.',
          ein: '562225983',
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 0,
            nteeType: 'Civil Rights, Social Action, Advocacy',
            nteeSuffix: null,
            incomeAmount: 251460,
            filingRequirement: '990 (all other) or 990EZ return',
            classification: 'Educational Organization',
            latest990: 'December, 2020',
            rulingDate: 'May, 2013',
            nteeCode: 'R26',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus:
              'Organization that normally receives no more than one-third of its support from gross investment income and unrelated business income and at the same time more than one-third of its support from contributions, fees, and gross receipts related to exempt purposes.  509(a)(2)',
            nteeClassification: 'Lesbian, Gay Rights',
            accountingPeriod: 'December',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'R',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'CHARLOTTE',
            postalCode: '28205-3030',
            streetAddress1: '1900 THE PLAZA',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/562225983/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Charlotte Pride Inc.',
            ein: '562225983',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.profile&ein=562225983&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/562225983',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.summary&orgid=7191&utm_source=DataAPI&utm_content=2ee11478',
          mission:
            'The Charlotte Symphony Orchestra believes that orchestral music nurtures the human spirit and is integral to the preservation and development of our American culture. It is our mission to perform a broad range of this music, including appropriate genres of American traditional and popular music, at the highest possible professional standards consistent with fiscal responsibility. The Charlotte Symphony will be a highly respected, financially sound, and valued arts organization whose performances will enrich, inspire, entertain, educate, and develop large and diverse audiences of all ages.',
          websiteURL: 'http://www.charlottesymphony.org',
          tagLine:
            'Performing a broad range of orchestral music at the highest standards',
          charityName: 'Charlotte Symphony Orchestra',
          ein: '566011568',
          currentRating: {
            score: 87.14,
            ratingImage: {
              small:
                'https://d20umu42aunjpx.cloudfront.net/_gfx_/icons/stars/3starsb.png',
              large: 'https://d20umu42aunjpx.cloudfront.net/_gfx_/icons/stars/3stars.png',
            },
            rating: 3,
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/566011568/Ratings/163902',
              },
            },
            financialRating: { score: 82.26, rating: 3 },
            accountabilityRating: { score: 96, rating: 4 },
          },
          category: {
            categoryName: 'Arts, Culture, Humanities',
            categoryID: 2,
            charityNavigatorURL:
              'https://www.charitynavigator.org/index.cfm?bay=search.categories&categoryid=2&utm_source=DataAPI&utm_content=2ee11478',
            image:
              'https://d20umu42aunjpx.cloudfront.net/_gfx_/icons/categories/arts.png?utm_source=DataAPI&utm_content=2ee11478',
          },
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 18938892,
            nteeType: 'Arts, Culture and Humanities',
            nteeSuffix: '0',
            incomeAmount: 10165005,
            filingRequirement: '990 (all other) or 990EZ return',
            classification: 'Charitable Organization',
            latest990: 'June, 2021',
            rulingDate: 'December, 1959',
            nteeCode: 'A69',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus:
              'Organization that normally receives no more than one-third of its support from gross investment income and unrelated business income and at the same time more than one-third of its support from contributions, fees, and gross receipts related to exempt purposes.  509(a)(2)',
            nteeClassification: 'Symphony Orchestras',
            accountingPeriod: 'June',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'A',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'Charlotte',
            postalCode: '28202',
            streetAddress1: '128 South Tryon Street',
            streetAddress2: 'Suite 350',
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/566011568/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Charlotte Symphony Orchestra',
            ein: '566011568',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.summary&orgid=7191&utm_source=DataAPI&utm_content=2ee11478',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/566011568',
              },
            },
          },
        },
      ]),
    );
  }),
];
