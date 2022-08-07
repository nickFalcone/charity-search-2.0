import { rest } from 'msw';

export const handlers = [
  rest.get('https://api.github.com/users/nickFalcone/followers', (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.summary&orgid=8986&utm_source=DataAPI&utm_content=6d62b764',
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
              'https://www.charitynavigator.org/index.cfm?bay=search.categories&categoryid=2&utm_source=DataAPI&utm_content=6d62b764',
            image:
              'https://d20umu42aunjpx.cloudfront.net/_gfx_/icons/categories/arts.png?utm_source=DataAPI&utm_content=6d62b764',
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
              'https://www.charitynavigator.org/?bay=search.summary&orgid=8986&utm_source=DataAPI&utm_content=6d62b764',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/581314711',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.summary&orgid=7861&utm_source=DataAPI&utm_content=6d62b764',
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
              'https://www.charitynavigator.org/index.cfm?bay=search.categories&categoryid=6&utm_source=DataAPI&utm_content=6d62b764',
            image:
              'https://d20umu42aunjpx.cloudfront.net/_gfx_/icons/categories/health.png?utm_source=DataAPI&utm_content=6d62b764',
          },
          cause: {
            causeID: 44,
            causeName: 'Rescue Missions',
            charityNavigatorURL:
              'https://www.charitynavigator.org/index.cfm?bay=search.results&cgid=6&cuid=44&utm_source=DataAPI&utm_content=6d62b764',
            image:
              'https://d20umu42aunjpx.cloudfront.net/_gfx_/causes/small/rescue-missions-50x50.jpg?utm_source=DataAPI&utm_content=6d62b764',
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
              'https://www.charitynavigator.org/?bay=search.summary&orgid=7861&utm_source=DataAPI&utm_content=6d62b764',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/560571223',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.summary&orgid=12478&utm_source=DataAPI&utm_content=6d62b764',
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
              'https://www.charitynavigator.org/index.cfm?bay=search.categories&categoryid=6&utm_source=DataAPI&utm_content=6d62b764',
            image:
              'https://d20umu42aunjpx.cloudfront.net/_gfx_/icons/categories/health.png?utm_source=DataAPI&utm_content=6d62b764',
          },
          cause: {
            causeID: 29,
            causeName: 'Social Services',
            charityNavigatorURL:
              'https://www.charitynavigator.org/index.cfm?bay=search.results&cgid=6&cuid=29&utm_source=DataAPI&utm_content=6d62b764',
            image:
              'https://d20umu42aunjpx.cloudfront.net/_gfx_/causes/small/social_services.gif?utm_source=DataAPI&utm_content=6d62b764',
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
              'https://www.charitynavigator.org/?bay=search.summary&orgid=12478&utm_source=DataAPI&utm_content=6d62b764',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/561398498',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.summary&orgid=7191&utm_source=DataAPI&utm_content=6d62b764',
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
              'https://www.charitynavigator.org/index.cfm?bay=search.categories&categoryid=2&utm_source=DataAPI&utm_content=6d62b764',
            image:
              'https://d20umu42aunjpx.cloudfront.net/_gfx_/icons/categories/arts.png?utm_source=DataAPI&utm_content=6d62b764',
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
              'https://www.charitynavigator.org/?bay=search.summary&orgid=7191&utm_source=DataAPI&utm_content=6d62b764',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/566011568',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.summary&orgid=15366&utm_source=DataAPI&utm_content=6d62b764',
          mission:
            "Charlotte Family Housing is a shelter-to-housing program for homeless families. We hold a deep belief in the strength and the capability of our families. We build upon our families' strengths to help them forge a path back to self-sufficiency. Our model is designed to produce healthy, deep, measurable and lasting change. While we primarily serve single mothers with children, we are also one of the limited options for single fathers with children and two-parent families. Our social workers are trained to partner in all aspects of a family's life to give direction on reaching their goals, especially with financial literacy, vocational counseling, children's education and health and wellness.",
          websiteURL: 'http://charlottefamilyhousing.org/',
          tagLine: 'Working to solve family homelessness',
          charityName: 'Charlotte Family Housing',
          ein: '581599120',
          currentRating: {
            score: 89.72,
            ratingImage: {
              small:
                'https://d20umu42aunjpx.cloudfront.net/_gfx_/icons/stars/3starsb.png',
              large: 'https://d20umu42aunjpx.cloudfront.net/_gfx_/icons/stars/3stars.png',
            },
            rating: 3,
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/581599120/Ratings/161928',
              },
            },
            financialRating: { score: 85.47, rating: 3 },
            accountabilityRating: { score: 100, rating: 4 },
          },
          category: {
            categoryName: 'Human Services',
            categoryID: 6,
            charityNavigatorURL:
              'https://www.charitynavigator.org/index.cfm?bay=search.categories&categoryid=6&utm_source=DataAPI&utm_content=6d62b764',
            image:
              'https://d20umu42aunjpx.cloudfront.net/_gfx_/icons/categories/health.png?utm_source=DataAPI&utm_content=6d62b764',
          },
          cause: {
            causeID: 28,
            causeName: 'Homeless Services',
            charityNavigatorURL:
              'https://www.charitynavigator.org/index.cfm?bay=search.results&cgid=6&cuid=28&utm_source=DataAPI&utm_content=6d62b764',
            image:
              'https://d20umu42aunjpx.cloudfront.net/_gfx_/causes/small/homeless.jpg?utm_source=DataAPI&utm_content=6d62b764',
          },
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 4223277,
            nteeType: 'Human Services - Multipurpose and Other',
            nteeSuffix: 'Z',
            incomeAmount: 3960292,
            filingRequirement: '990 (all other) or 990EZ return',
            classification: 'Charitable Organization',
            latest990: 'June, 2021',
            rulingDate: 'April, 1985',
            nteeCode: 'P85',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus:
              'Organization which receives a substantial part of its support from a governmental unit or the general public   170(b)(1)(A)(vi)',
            nteeClassification: 'Homeless Persons Centers, Services',
            accountingPeriod: 'June',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'P',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'Charlotte',
            postalCode: '28204',
            streetAddress1: '300 Hawthorne Lane',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/581599120/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Charlotte Family Housing',
            ein: '581599120',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.summary&orgid=15366&utm_source=DataAPI&utm_content=6d62b764',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/581599120',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.summary&orgid=6274&utm_source=DataAPI&utm_content=6d62b764',
          mission:
            "The YMCA of Greater Charlotte was founded in November of 1874 to help young men grow in spirit, mind and body. We are dedicated to putting Christian principles into practice through programs that build healthy spirit, mind, and body for all. The YMCA's holistic approach to wellness is designed to strengthen kids, families and communities and to emphasize the character values of honesty, caring, responsibility, respect and faith. We provide thousands of programs that build healthy spirit, mind and body in the following categories: aquatics; arts and performing arts; child care, including afterschool and day camp; resident camp; fitness and wellness; sports; and special programs and events. Our programs are designed to help you, your family and your community grow.",
          websiteURL: 'http://www.ymcacharlotte.org/',
          tagLine: 'We build strong kids, strong families, strong communities',
          charityName: 'YMCA of Greater Charlotte',
          ein: '561045299',
          currentRating: {
            score: 92.32,
            ratingImage: {
              small:
                'https://d20umu42aunjpx.cloudfront.net/_gfx_/icons/stars/4starsb.png',
              large: 'https://d20umu42aunjpx.cloudfront.net/_gfx_/icons/stars/4stars.png',
            },
            rating: 4,
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/561045299/Ratings/160549',
              },
            },
            financialRating: { score: 91.71, rating: 4 },
            accountabilityRating: { score: 93, rating: 4 },
          },
          category: {
            categoryName: 'Human Services',
            categoryID: 6,
            charityNavigatorURL:
              'https://www.charitynavigator.org/index.cfm?bay=search.categories&categoryid=6&utm_source=DataAPI&utm_content=6d62b764',
            image:
              'https://d20umu42aunjpx.cloudfront.net/_gfx_/icons/categories/health.png?utm_source=DataAPI&utm_content=6d62b764',
          },
          cause: {
            causeID: 15,
            causeName: 'Multipurpose Human Service Organizations',
            charityNavigatorURL:
              'https://www.charitynavigator.org/index.cfm?bay=search.results&cgid=6&cuid=15&utm_source=DataAPI&utm_content=6d62b764',
            image:
              'https://d20umu42aunjpx.cloudfront.net/_gfx_/causes/small/multipurpose.gif?utm_source=DataAPI&utm_content=6d62b764',
          },
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 204512440,
            nteeType: 'Human Services - Multipurpose and Other',
            nteeSuffix: '0',
            incomeAmount: 74809078,
            filingRequirement: '990 (all other) or 990EZ return',
            classification: 'Charitable Organization',
            latest990: 'December, 2021',
            rulingDate: 'July, 1973',
            nteeCode: 'P27',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus:
              'Organization which receives a substantial part of its support from a governmental unit or the general public   170(b)(1)(A)(vi)',
            nteeClassification:
              "Young Men's or Women's Associations (YMCA, YWCA, YWHA, YMHA)",
            accountingPeriod: 'December',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'P',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'Charlotte',
            postalCode: '28202',
            streetAddress1: '400 East Morehead Street',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/561045299/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'YMCA of Greater Charlotte',
            ein: '561045299',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.summary&orgid=6274&utm_source=DataAPI&utm_content=6d62b764',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/561045299',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.summary&orgid=8278&utm_source=DataAPI&utm_content=6d62b764',
          mission:
            'The Humane Society of Charlotte is a community resource committed to delivering effective, innovative services that strengthen the human-animal bond and improve the lives of companion animals and the people who care about them. Our vision is for Charlotte to be a united community where animal welfare is valued and demonstrated through educated and collaborative efforts leading to positive outcomes for people and animals.',
          websiteURL: 'http://humanecharlotte.org/',
          tagLine: 'Changing lives one animal at a time',
          charityName: 'Humane Society of Charlotte',
          ein: '581342479',
          currentRating: {
            score: 79.35,
            ratingImage: {
              small:
                'https://d20umu42aunjpx.cloudfront.net/_gfx_/icons/stars/2starsb.png',
              large: 'https://d20umu42aunjpx.cloudfront.net/_gfx_/icons/stars/2stars.png',
            },
            rating: 2,
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/581342479/Ratings/159012',
              },
            },
            financialRating: { score: 71.08, rating: 2 },
            accountabilityRating: { score: 96, rating: 4 },
          },
          category: {
            categoryName: 'Animals',
            categoryID: 1,
            charityNavigatorURL:
              'https://www.charitynavigator.org/index.cfm?bay=search.categories&categoryid=1&utm_source=DataAPI&utm_content=6d62b764',
            image:
              'https://d20umu42aunjpx.cloudfront.net/_gfx_/icons/categories/animals.png?utm_source=DataAPI&utm_content=6d62b764',
          },
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 17566879,
            nteeType: 'Animal-Related',
            nteeSuffix: '0',
            incomeAmount: 6445744,
            filingRequirement: '990 (all other) or 990EZ return',
            classification: 'Charitable Organization',
            latest990: 'December, 2020',
            rulingDate: 'January, 1979',
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
            city: 'Charlotte',
            postalCode: '28203',
            streetAddress1: '2700 Toomey Avenue',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/581342479/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Humane Society of Charlotte',
            ein: '581342479',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.summary&orgid=8278&utm_source=DataAPI&utm_content=6d62b764',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/581342479',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.summary&orgid=11616&utm_source=DataAPI&utm_content=6d62b764',
          mission:
            'We are mobilizing the power of our community to break the cycle of poverty. Our vision is a community without poverty. <br><br>The United Way has been serving the Charlotte County community since 1966. For all these years, the generosity of donors has made possible programs that nurture children, help youth succeed, promote health and wellness, strengthen adults and families, and provide basic assistance to Charlotte County neighbors. The United Way draws on the resources of the entire community, both human and financial, to support programs in our area. Each of our member agencies relies on volunteers to help provide these critically needed services.',
          websiteURL: 'http://www.unitedwayccfl.org',
          tagLine:
            'Leading the united effort to eliminate poverty by investing in our community',
          charityName: 'United Way of Charlotte County',
          ein: '591149995',
          currentRating: {
            score: 88.19,
            ratingImage: {
              small:
                'https://d20umu42aunjpx.cloudfront.net/_gfx_/icons/stars/3starsb.png',
              large: 'https://d20umu42aunjpx.cloudfront.net/_gfx_/icons/stars/3stars.png',
            },
            rating: 3,
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/591149995/Ratings/169049',
              },
            },
            financialRating: { score: 83.31, rating: 3 },
            accountabilityRating: { score: 100, rating: 4 },
          },
          category: {
            categoryName: 'Community Development',
            categoryID: 10,
            charityNavigatorURL:
              'https://www.charitynavigator.org/index.cfm?bay=search.categories&categoryid=10&utm_source=DataAPI&utm_content=6d62b764',
            image:
              'https://d20umu42aunjpx.cloudfront.net/_gfx_/icons/categories/religion.png?utm_source=DataAPI&utm_content=6d62b764',
          },
          cause: {
            causeID: 42,
            causeName: 'United Ways',
            charityNavigatorURL:
              'https://www.charitynavigator.org/index.cfm?bay=search.results&cgid=10&cuid=42&utm_source=DataAPI&utm_content=6d62b764',
            image:
              'https://d20umu42aunjpx.cloudfront.net/_gfx_/causes/small/United_Way.gif?utm_source=DataAPI&utm_content=6d62b764',
          },
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 1399525,
            nteeType: 'Philanthropy, Voluntarism and Grantmaking Foundations',
            nteeSuffix: 'Z',
            incomeAmount: 2249089,
            filingRequirement: '990 (all other) or 990EZ return',
            classification: 'Charitable Organization',
            latest990: 'March, 2021',
            rulingDate: 'February, 1977',
            nteeCode: 'T70',
            groupName: null,
            affiliation:
              'Central - the organization is a central type organization (no group exemption) of a National, Regional or Geographic grouping of organizations.',
            deductibilityCode: '1',
            foundationStatus:
              'Organization which receives a substantial part of its support from a governmental unit or the general public   170(b)(1)(A)(vi)',
            nteeClassification: 'Fund Raising Organizations That Cross Categories',
            accountingPeriod: 'March',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'T',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'FL',
            city: 'Port Charlotte',
            postalCode: '33948',
            streetAddress1: '17831 Murdock Circle',
            streetAddress2: 'Suite A',
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/591149995/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'United Way of Charlotte County',
            ein: '591149995',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.summary&orgid=11616&utm_source=DataAPI&utm_content=6d62b764',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/591149995',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.summary&orgid=8987&utm_source=DataAPI&utm_content=6d62b764',
          mission:
            "The mission of the Jewish Federation of Greater Charlotte is to raise and distribute funds to support and enrich the lives of Jews locally, nationally, in Israel and worldwide. Through education and community building, the Federation's mission ensures that Jewish values, goals, traditions and connections are preserved for current and future generations. The Federation considers local community-building needs and global shared responsibilities, and then allocates funds accordingly. The impact of this collective funding of Federation allows us to constantly and consistently meet the needs of our Jewish family, no matter how far reaching, no matter where they may be.",
          websiteURL: 'http://www.jewishcharlotte.org/',
          tagLine:
            'Supporting and enriching the lives of Jews locally, nationally, in Israel and worldwide',
          charityName: 'Jewish Federation of Greater Charlotte',
          ein: '561951745',
          currentRating: {
            score: 91.68,
            ratingImage: {
              small:
                'https://d20umu42aunjpx.cloudfront.net/_gfx_/icons/stars/4starsb.png',
              large: 'https://d20umu42aunjpx.cloudfront.net/_gfx_/icons/stars/4stars.png',
            },
            rating: 4,
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/561951745/Ratings/164453',
              },
            },
            financialRating: { score: 91.39, rating: 4 },
            accountabilityRating: { score: 92, rating: 4 },
          },
          category: {
            categoryName: 'Community Development',
            categoryID: 10,
            charityNavigatorURL:
              'https://www.charitynavigator.org/index.cfm?bay=search.categories&categoryid=10&utm_source=DataAPI&utm_content=6d62b764',
            image:
              'https://d20umu42aunjpx.cloudfront.net/_gfx_/icons/categories/religion.png?utm_source=DataAPI&utm_content=6d62b764',
          },
          cause: {
            causeID: 43,
            causeName: 'Jewish Federations',
            charityNavigatorURL:
              'https://www.charitynavigator.org/index.cfm?bay=search.results&cgid=10&cuid=43&utm_source=DataAPI&utm_content=6d62b764',
            image:
              'https://d20umu42aunjpx.cloudfront.net/_gfx_/causes/small/Jewish_Federation.jpg?utm_source=DataAPI&utm_content=6d62b764',
          },
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 7719058,
            nteeType: 'Philanthropy, Voluntarism and Grantmaking Foundations',
            nteeSuffix: 'Z',
            incomeAmount: 5019075,
            filingRequirement: '990 (all other) or 990EZ return',
            classification: 'Charitable Organization',
            latest990: 'December, 2020',
            rulingDate: 'April, 1997',
            nteeCode: 'T99',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus:
              'Organization which receives a substantial part of its support from a governmental unit or the general public   170(b)(1)(A)(vi)',
            nteeClassification:
              'Philanthropy, Voluntarism, and Grantmaking Foundations N.E.C.',
            accountingPeriod: 'December',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'T',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'Charlotte',
            postalCode: '28226',
            streetAddress1: '5007 Providence Road',
            streetAddress2: 'Suite 101',
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/561951745/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Jewish Federation of Greater Charlotte',
            ein: '561951745',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.summary&orgid=8987&utm_source=DataAPI&utm_content=6d62b764',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/561951745',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.summary&orgid=18322&utm_source=DataAPI&utm_content=6d62b764',
          mission:
            "Charlotte Center for Legal Advocacy helps people in the Charlotte, North Carolina, region who cannot afford legal services, but desperately need them. Without legal representation in civil matters, thousands of families can lose access to financial security, healthcare, housing and opportunity. Since 1967, our staff and pro bono attorneys have provided comprehensive civil legal services for our region's low-income residents. We accomplish our mission through a variety of advocacy strategies, including individual advice and representation, community education and outreach, representation of groups, self-help remedies, collaboration with other agencies, community economic development, legislative and administrative advocacy, and impact litigation.",
          websiteURL: 'https://charlottelegaladvocacy.org/',
          tagLine: 'Pursuing justice for those in need',
          charityName: 'Charlotte Center for Legal Advocacy',
          ein: '561202940',
          currentRating: {
            score: 95.47,
            ratingImage: {
              small:
                'https://d20umu42aunjpx.cloudfront.net/_gfx_/icons/stars/4starsb.png',
              large: 'https://d20umu42aunjpx.cloudfront.net/_gfx_/icons/stars/4stars.png',
            },
            rating: 4,
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/561202940/Ratings/167038',
              },
            },
            financialRating: { score: 95, rating: 4 },
            accountabilityRating: { score: 96, rating: 4 },
          },
          category: {
            categoryName: 'Human and Civil Rights',
            categoryID: 8,
            charityNavigatorURL:
              'https://www.charitynavigator.org/index.cfm?bay=search.categories&categoryid=8&utm_source=DataAPI&utm_content=6d62b764',
            image:
              'https://d20umu42aunjpx.cloudfront.net/_gfx_/icons/categories/international.png?utm_source=DataAPI&utm_content=6d62b764',
          },
          cause: {
            causeID: 21,
            causeName: 'Advocacy and Education',
            charityNavigatorURL:
              'https://www.charitynavigator.org/index.cfm?bay=search.results&cgid=8&cuid=21&utm_source=DataAPI&utm_content=6d62b764',
            image:
              'https://d20umu42aunjpx.cloudfront.net/_gfx_/causes/small/advocacy.gif?utm_source=DataAPI&utm_content=6d62b764',
          },
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 8770350,
            nteeType: 'Crime, Legal-Related',
            nteeSuffix: 'Z',
            incomeAmount: 6579702,
            filingRequirement: '990 (all other) or 990EZ return',
            classification: 'Charitable Organization',
            latest990: 'June, 2021',
            rulingDate: 'March, 1979',
            nteeCode: 'I80',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus:
              'Organization which receives a substantial part of its support from a governmental unit or the general public   170(b)(1)(A)(vi)',
            nteeClassification: 'Legal Services',
            accountingPeriod: 'June',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'I',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'Charlotte',
            postalCode: '28212',
            streetAddress1: '5535 Albermarle Road',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/561202940/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Charlotte Center for Legal Advocacy',
            ein: '561202940',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.summary&orgid=18322&utm_source=DataAPI&utm_content=6d62b764',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/561202940',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.summary&orgid=8678&utm_source=DataAPI&utm_content=6d62b764',
          mission:
            "Seeking to put God's love into action, Habitat for Humanity brings people together to build homes, communities and hope. Habitat Charlotte Region bolsters economic mobility and achieves our mission through two core programs: Homeownership and Critical Home Repair (CHR). Our approach differs from other affordable housing providers because we adhere to the philosophy that homeownership creates equity for a family, and is a path to become financially stable. Our programs guide families through making permanent changes that break the cycle of generational poverty, while sweat equity hours and homeownership classes prepare our partner families for the rigors of homeownership. For over three decades, Habitat Charlotte Region has provided affordable homeownership solutions for over 3,300 low income families in Mecklenburg and Iredell counties. In February 2020, Our Towns Habitat and Habitat Charlotte merged into one organization, becoming Habitat for Humanity of the Charlotte Region.",
          websiteURL: 'http://www.habitatCLTregion.org/',
          tagLine: 'Building strength, stability  and self-reliance through shelter.',
          charityName: 'Habitat for Humanity of Charlotte Inc',
          ein: '561366233',
          currentRating: {
            score: 96.46,
            ratingImage: {
              small:
                'https://d20umu42aunjpx.cloudfront.net/_gfx_/icons/stars/4starsb.png',
              large: 'https://d20umu42aunjpx.cloudfront.net/_gfx_/icons/stars/4stars.png',
            },
            rating: 4,
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/561366233/Ratings/170040',
              },
            },
            financialRating: { score: 95, rating: 4 },
            accountabilityRating: { score: 100, rating: 4 },
          },
          category: {
            categoryName: 'Community Development',
            categoryID: 10,
            charityNavigatorURL:
              'https://www.charitynavigator.org/index.cfm?bay=search.categories&categoryid=10&utm_source=DataAPI&utm_content=6d62b764',
            image:
              'https://d20umu42aunjpx.cloudfront.net/_gfx_/icons/categories/religion.png?utm_source=DataAPI&utm_content=6d62b764',
          },
          cause: {
            causeID: 27,
            causeName: 'Housing and Neighborhood Development',
            charityNavigatorURL:
              'https://www.charitynavigator.org/index.cfm?bay=search.results&cgid=10&cuid=27&utm_source=DataAPI&utm_content=6d62b764',
            image:
              'https://d20umu42aunjpx.cloudfront.net/_gfx_/causes/small/housing.gif?utm_source=DataAPI&utm_content=6d62b764',
          },
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 71967554,
            nteeType: 'Housing, Shelter',
            nteeSuffix: 'Z',
            incomeAmount: 28239912,
            filingRequirement: '990 (all other) or 990EZ return',
            classification: 'Charitable Organization',
            latest990: 'June, 2021',
            rulingDate: 'January, 1987',
            nteeCode: 'L20',
            groupName:
              'HABITAT FOR HUMANITY INTERNATIONAL                                    ',
            affiliation:
              'Subordinate - the organization is a subordinate in a group ruling.',
            deductibilityCode: '1',
            foundationStatus:
              'Organization which receives a substantial part of its support from a governmental unit or the general public   170(b)(1)(A)(vi)',
            nteeClassification: 'Housing Development, Construction, Management',
            accountingPeriod: 'June',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'L',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'Charlotte',
            postalCode: '28211',
            streetAddress1: '3815 Latrobe Drive',
            streetAddress2: null,
          },
          donationAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'Charlotte',
            postalCode: '28222',
            streetAddress1: 'P.O. Box 220287',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/561366233/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Habitat for Humanity of Charlotte Inc',
            ein: '561366233',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.summary&orgid=8678&utm_source=DataAPI&utm_content=6d62b764',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/561366233',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.summary&orgid=13607&utm_source=DataAPI&utm_content=6d62b764',
          mission:
            "Our mission is to provide the families of children being treated in area medical facilities with a safe, affordable and caring \"home-away-from-home.\" Our residential House program offers traveling families a safe place to call home for the duration of their child's treatment, providing them with a bedroom, bathroom, daily meals and more. Our second program is the Ronald McDonald Family Room at Caroline's Corner located within Novant Health Hemby Children's Hospital which provides onsite refreshments, lounge space, laundry and shower facilities to all patients and families. The goal of both programs is to provide needed support services to families so that they can focus on what matters most: the treatment and recovery of their child.",
          websiteURL: 'http://www.rmhclt.org',
          tagLine: 'Keeping Families Close',
          charityName: 'Ronald McDonald House Charities of Greater Charlotte',
          ein: '204671570',
          currentRating: {
            score: 87.39,
            ratingImage: {
              small:
                'https://d20umu42aunjpx.cloudfront.net/_gfx_/icons/stars/3starsb.png',
              large: 'https://d20umu42aunjpx.cloudfront.net/_gfx_/icons/stars/3stars.png',
            },
            rating: 3,
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/204671570/Ratings/161618',
              },
            },
            financialRating: { score: 82.63, rating: 3 },
            accountabilityRating: { score: 96, rating: 4 },
          },
          category: {
            categoryName: 'Health',
            categoryID: 5,
            charityNavigatorURL:
              'https://www.charitynavigator.org/index.cfm?bay=search.categories&categoryid=5&utm_source=DataAPI&utm_content=6d62b764',
            image:
              'https://d20umu42aunjpx.cloudfront.net/_gfx_/icons/categories/environment.png?utm_source=DataAPI&utm_content=6d62b764',
          },
          cause: {
            causeID: 34,
            causeName: 'Patient and Family Support',
            charityNavigatorURL:
              'https://www.charitynavigator.org/index.cfm?bay=search.results&cgid=5&cuid=34&utm_source=DataAPI&utm_content=6d62b764',
            image:
              'https://d20umu42aunjpx.cloudfront.net/_gfx_/causes/small/patient_and_family_support.gif?utm_source=DataAPI&utm_content=6d62b764',
          },
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 12521197,
            nteeType: 'Human Services - Multipurpose and Other',
            nteeSuffix: null,
            incomeAmount: 1739185,
            filingRequirement: '990 (all other) or 990EZ return',
            classification: 'Charitable Organization',
            latest990: 'December, 2020',
            rulingDate: 'July, 2006',
            nteeCode: 'P61',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus:
              'Organization which receives a substantial part of its support from a governmental unit or the general public   170(b)(1)(A)(vi)',
            nteeClassification: "Travelers' Aid",
            accountingPeriod: 'December',
            deductibilityDetail: null,
            exemptOrgStatus: 'Unconditional Exemption',
            exemptOrgStatusCode: '01',
            nteeLetter: 'P',
          },
          mailingAddress: {
            country: null,
            stateOrProvince: 'NC',
            city: 'Charlotte',
            postalCode: '28207',
            streetAddress1: '1613 East Morehead Street',
            streetAddress2: null,
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/204671570/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Ronald McDonald House Charities of Greater Charlotte',
            ein: '204671570',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.summary&orgid=13607&utm_source=DataAPI&utm_content=6d62b764',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/204671570',
              },
            },
          },
        },
        {
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.summary&orgid=16684&utm_source=DataAPI&utm_content=6d62b764',
          mission:
            "As part of the nation's leading stay in school network, the mission of Communities In Schools of Charlotte-Mecklenburg, Inc. (CIS) is to surround students with a community of support, empowering them to stay in school and achieve in life.<br><br>Sitting at the cross section of education and human services, the current scope of CIS services includes our Core school-based dropout prevention programming (PreK-12) as well as Specialized Interventions that target and address specific, chronically growing community issues such as college access and career readiness for underprivileged youth, support for teen mothers balancing the challenges of childcare and high school graduation, working with youthful offenders to continue their education, and serving unaccompanied immigrant students.",
          websiteURL: 'http://cischarlotte.org/',
          tagLine: 'Ensuring a Trajectory Towards Success\r\n',
          charityName: 'Communities in Schools of Charlotte Mecklenburg, Inc.',
          ein: '581661795',
          currentRating: {
            score: 93.11,
            ratingImage: {
              small:
                'https://d20umu42aunjpx.cloudfront.net/_gfx_/icons/stars/4starsb.png',
              large: 'https://d20umu42aunjpx.cloudfront.net/_gfx_/icons/stars/4stars.png',
            },
            rating: 4,
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/581661795/Ratings/166750',
              },
            },
            financialRating: { score: 91.13, rating: 4 },
            accountabilityRating: { score: 96, rating: 4 },
          },
          category: {
            categoryName: 'Education',
            categoryID: 3,
            charityNavigatorURL:
              'https://www.charitynavigator.org/index.cfm?bay=search.categories&categoryid=3&utm_source=DataAPI&utm_content=6d62b764',
            image:
              'https://d20umu42aunjpx.cloudfront.net/_gfx_/icons/categories/community-development.png?utm_source=DataAPI&utm_content=6d62b764',
          },
          cause: {
            causeID: 40,
            causeName: 'Youth Education Programs and Services',
            charityNavigatorURL:
              'https://www.charitynavigator.org/index.cfm?bay=search.results&cgid=3&cuid=40&utm_source=DataAPI&utm_content=6d62b764',
            image:
              'https://d20umu42aunjpx.cloudfront.net/_gfx_/causes/small/youth_education.gif?utm_source=DataAPI&utm_content=6d62b764',
          },
          irsClassification: {
            deductibility: 'Contributions are deductible',
            subsection: '501(c)(3)',
            assetAmount: 9432775,
            nteeType: null,
            nteeSuffix: 'Z',
            incomeAmount: 8752460,
            filingRequirement: '990 (all other) or 990EZ return',
            classification: 'Charitable Organization',
            latest990: 'June, 2021',
            rulingDate: 'June, 1986',
            nteeCode: 'B91',
            groupName: null,
            affiliation:
              'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
            deductibilityCode: '1',
            foundationStatus:
              'Organization which receives a substantial part of its support from a governmental unit or the general public   170(b)(1)(A)(vi)',
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
            city: 'Charlotte',
            postalCode: '28202',
            streetAddress1: '601 East 5th Street',
            streetAddress2: 'Suite 300',
          },
          advisories: {
            severity: null,
            active: {
              _rapid_links: {
                related: {
                  href: 'https://api.data.charitynavigator.org/v2/Organizations/581661795/Advisories?status=ACTIVE',
                },
              },
            },
          },
          organization: {
            charityName: 'Communities in Schools of Charlotte Mecklenburg, Inc.',
            ein: '581661795',
            charityNavigatorURL:
              'https://www.charitynavigator.org/?bay=search.summary&orgid=16684&utm_source=DataAPI&utm_content=6d62b764',
            _rapid_links: {
              related: {
                href: 'https://api.data.charitynavigator.org/v2/Organizations/581661795',
              },
            },
          },
        },
      ]),
    );
  }),
];
