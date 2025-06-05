interface document {
    String getAuthorFirst();
    String getAuthorLast();
    String getTitle();
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
}

class article implements document {
    String authorFirst;
    String authorLast;
    String title;
    String url;

    article(String first, String last, String title, String url) {
        this.authorFirst = first;
        this.authorLast = last;
        this.title = title;
        this.url = url;
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
}

class book implements document {
    String authorFirst;
    String authorLast;
    String title;
    String publisher;

    book(String first, String last, String title, String publisher) {
        this.authorFirst = first;
        this.authorLast = last;
        this.title = title;
        this.publisher = publisher;
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
}