# Home work description

Stwórz Aplikację Quizową w React
Twoim zadaniem jest stworzenie interaktywnej aplikacji quizowej, która testuje wiedzę użytkownika z wybranego zakresu tematycznego. Aplikacja powinna składać się z ekranu startowego, serii pytań z wielokrotnym wyborem oraz podsumowania wyników na końcu quizu. Dodatkowo, użytkownik powinien mieć możliwość rozpoczęcia quizu od nowa.
Aplikacja powinna zawierać komponenty zaprojektowane w sposób umożliwiający ich wielokrotne użycie w różnych kontekstach. Przykładem może być komponent Button, który znajduje zastosowanie w różnych częściach aplikacji, takich jak ekran startowy, pytania quizowe czy podsumowanie wyników. Aby osiągnąć reużywalność, komponent Button powinien akceptować propsy, które pozwalają na jego dostosowanie.

Wymagania Funkcjonalne:

1. Ekran Startowy: Wyświetl tytuł quizu oraz przycisk rozpoczynający quiz
2. Seria Pytań: Po rozpoczęciu quizu, użytkownikowi prezentowane są kolejne pytania z czterema możliwymi odpowiedziami do wyboru. Każde pytanie powinno mieć wyświetlany unikalny indeks np. “Pytanie 1” itd.
3. Zbieranie Odpowiedzi: Aplikacja powinna zbierać i przechowywać odpowiedzi użytkownika
4. Podsumowanie Wyników:

- Ocena Zaliczenia: Ekran podsumowania jasno informuje, czy użytkownik zaliczył quiz. Aby zaliczyć quiz, użytkownik musi osiągnąć wynik co najmniej 80% poprawnych odpowiedzi. Tekst informujący o zaliczeniu quizu jest wyświetlany w kolorze zielonym, podczas gdy informacja o niezaliczeniu – w kolorze czerwonym.
- Procent Poprawnych Odpowiedzi: Podsumowanie zawiera również informację o procentowym wyniku poprawnych odpowiedzi użytkownika. Wynik ten obliczany jest na podstawie liczby poprawnych odpowiedzi w stosunku do całkowitej liczby pytań quizu.
- Szczegóły Pytań i Odpowiedzi: Na ekranie podsumowania użytkownikowi prezentowana jest lista wszystkich pytań wraz z wybranymi przez siebie odpowiedziami. Poprawność każdej z odpowiedzi użytkownika zaznaczona jest za pomocą koloru tekstu: zielony kolor tekstu wskazuje na poprawną odpowiedź, natomiast czerwony kolor oznacza odpowiedź niepoprawną.

5. Restart Quizu: Na ekranie podsumowania dodaj przycisk, który umożliwi użytkownikowi powrót do ekranu startowego

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
