import xml.etree.ElementTree as ET

def main():
    data = """
    <person>
        <name>Dave</name>
        <phone type="intl">
        +1 906 834 4533
        </phone>
        <email hide="yes"/>
    </person>
    """

    tree = ET.fromstring(data)
    print('Name is', tree.find('name').text)
    print('email hide attribute', tree.find('email').get('hide'))

    num = tree.find('phone').text
    num = num.strip()
    print('number is', num)

    input = """
    <stuff>
        <people>
            <person>
                <name>Dave</name>
                <phone type="intl">
                +1 906 834 4533
                </phone>
                <email hide="yes"/>
            </person>
            <person>
                <name>james</name>
                <phone type="intl">
                +1 906 834 8546
                </phone>
                <email hide="no"/>
            </person>
        </people>
    </stuff>
    """

    stuff = ET.fromstring(input)
    that = stuff.findall('people/person')
    print(len(that))

    for item in that:
        print(item.find('name').text)
        print(item.find('phone').text.strip())
        print(item.find('email').get('hide').upper())
        print()

if __name__=='__main__':
    main()