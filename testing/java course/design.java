// create a bibliography application
interface document {
    String getAuthorFirst();
    String getAuthorLast();
    String getTitle();
    document getBibliography();
    document getNextEntry();
}

class noDocument implements document {
    noDocument() {
    }

    public String getAuthorFirst() {
        return "";
    }

    public String getAuthorLast() {
        return "";
    }

    public String getTitle() {
        return "";
    }

    public document getBibliography() {
        return new noDocument();
    }

    public document getNextEntry() {
        return new noDocument();
    }
}

class article implements document {
    String authorFirst;
    String authorLast;
    String title;
    String url;
    document bibliography;
    document nextEntry;

    article(String first, String last, String title, String url, document bibliography, document nextEntry) {
        this.authorFirst = first;
        this.authorLast = last;
        this.title = title;
        this.url = url;
        this.bibliography = bibliography;
        this.nextEntry = nextEntry;
    }

    public String getAuthorFirst() {
        return authorFirst;
    }

    public String getAuthorLast() {
        return authorLast;
    }

    public String getTitle() {
        return title;
    }

    public String getUrl() {
        return url;
    }

    public document getBibliography() {
        return bibliography;
    }

    public document getNextEntry() {
        return nextEntry;
    }
}

class book implements document {
    String authorFirst;
    String authorLast;
    String title;
    String publisher;
    document bibliography;
    document nextEntry;

    book(String first, String last, String title, String publisher, document bibliography, document nextEntry) {
        this.authorFirst = first;
        this.authorLast = last;
        this.title = title;
        this.publisher = publisher;
        this.bibliography = bibliography;
        this.nextEntry = nextEntry;
    }

    public String getAuthorFirst() {
        return authorFirst;
    }

    public String getAuthorLast() {
        return authorLast;
    }

    public String getTitle() {
        return title;
    }

    public String getPublisher() {
        return publisher;
    }

    public document getBibliography() {
        return bibliography;
    }

    public document getNextEntry() {
        return nextEntry;
    }
}