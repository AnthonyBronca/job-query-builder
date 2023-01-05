'''
Google's guide: https://support.google.com/websearch/answer/2466433?hl=en

Google query search rules:

search for social media: @
ex: @twitter

exclude words from a search use: -
ex: -python -sr.dev

exact match use: "  "
ex: "javascript developer"

combine search use: OR
ex: "javascript developer" OR "python developer"

search a specific site use: site:

ex: site:google.com OR site:.gov OR site:Linkedin.com

'''


def askSites():
    print('What sites would you like to search for jobs? *USE COMMAS TO SEPERATE*: EX linkedin.com,googe.com:   ')
    print('Here are some popular job boards you might try to search for: glassdoor.com, angelist.co, linkedin.com, greenhouse.io, app.dover.io, lever.co, jobs.ashbyhq.com')
    site_input = input()
    # print(site_input)
    sites_List = site_input.split(',')
    print('searching sites for:   ', sites_List)
    return sites_List


def askSearchItems():
    print('What specific searches would you like? *USE COMMAS TO SEPERATE TERMS* Ex: front-end developer,javascript:  ')
    search_input = input()
    search_input_list = search_input.split(',')
    print('searching for:   ', search_input_list)
    return search_input_list


def ask_exclusions():
    print('What specific terms would you like to omit from your search? * USE COMMAS TO SEPERATE TERMS* EX: sr.,senior,java')
    excluded_input = input()
    excluded_input_list = excluded_input.split(',')
    print('exluding the following terms:   ', excluded_input_list)
    return excluded_input_list


def build_string(sites_list, search_input_list, excluded_items_list):
    string_list = []
    if sites_list is not None:
        for site in sites_list:
            string_list.append(f'site:{site}')
            string_list.append(' OR ')

        string_list.pop()

    if search_input_list is not None:
        string_list.append(' ')
        for search in search_input_list:
            string_list.append(f'"{search}"')
            string_list.append(' OR ')
        string_list.pop()
    if excluded_items_list is not None:
        string_list.append(' ')
        for item in excluded_items_list:
            string_list.append(f"-{item}")
            string_list.append(' ')
        string_list.pop()

    return ''.join(string_list)


def buildQuery():
    print('Would you like to specify any sites? y/n:')
    q1 = input()
    q1.lower()
    if q1 == 'y':
        sites_list = askSites()
    if q1 == 'n':
        sites_list = None
    print('Would you like to specify any exact search items? y/n: ')
    q2 = input()
    q2.lower()
    if q2 == 'y':
        search_input_list = askSearchItems()
    if q2 == 'n':
        search_input_list = None
    print('Would you like to exclude any specific terms? y/n:')
    q3 = input()
    q3.lower()
    if q3 == 'y':
        excluded_input_list = ask_exclusions()
    if q3 == 'n':
        excluded_input_list = None
    if q1 == 'n' and q2 == 'n' and q3 == 'n':
        print('No input entered!')
        return None
    print('Here is your search string!   ', build_string(
        sites_list, search_input_list, excluded_input_list))
    return None


buildQuery()
