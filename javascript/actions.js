document.querySelector('.electorate').addEventListener('click', function(){
    document.getElementById('table-content').innerHTML= "<table>\n" +
        "    <thead>\n" +
        "        <tr>\n" +
        "            <th>Lp.</th>\n" +
        "            <th>Wiek</th>\n" +
        "            <th>Okręg Wyborczy</th>\n" +
        "            <th></th>\n" +
        "            <th></th>\n" +
        "        </tr>\n" +
        "    </thead>\n" +
        "    <tfoot>\n" +
        "    <tr>\n" +
        "        <td><button>Dodaj</button></td>\n" +
        "    </tr>\n" +
        "    </tfoot>\n" +
        "    <tbody>\n" +
        "    <tr>\n" +
        "        <td>1.</td>\n" +
        "        <td>23</td>\n" +
        "        <td>Warszawka</td>\n" +
        "        <td><button>Edytuj</button></td>\n" +
        "        <td><button>Usuń</button></td>\n" +
        "    </tr>\n" +
        "    </tbody>\n" +
        "</table>";
}, false);

document.querySelector('.candidates').addEventListener('click', function(){
    document.getElementById('table-content').innerHTML="" +
        "<table>\n" +
        "    <thead>\n" +
        "    <tr>\n" +
        "        <th>Lp.</th>\n" +
        "        <th>Imię</th>\n" +
        "        <th>Nazwisko</th>\n" +
        "        <th>Okręg Wyborczy</th>\n" +
        "        <th></th>\n" +
        "        <th></th>\n" +
        "    </tr>\n" +
        "    </thead>\n" +
        "    <tfoot>\n" +
        "    <tr>\n" +
        "        <td><button>Dodaj</button></td>\n" +
        "    </tr>\n" +
        "    </tfoot>\n" +
        "    <tbody>\n" +
        "    <tr>\n" +
        "        <td>1.</td>\n" +
        "        <td>Jan</td>\n" +
        "        <td>Kowalski</td>\n" +
        "        <td>Katowice</td>\n" +
        "        <td><button>Edytuj</button></td>\n" +
        "        <td><button>Usuń</button></td>\n" +
        "    </tr>\n" +
        "    </tbody>\n" +
        "</table>"
},false);