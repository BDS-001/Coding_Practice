
# import needed modules
from django.shortcuts import render, redirect
from django.urls import reverse
from . import util
from django import forms
import random as rd
import markdown2

# create class for edit page submission
class NewPage(forms.Form):
    title = forms.CharField(label="Title")
    page = forms.CharField(widget=forms.Textarea, label="")

class WikiPage(forms.Form):
    page = forms.CharField(widget=forms.Textarea, label="")

# display the homepage 
def index(request):
    # check to see if the user has used the search bar
    search = request.GET.get("q")
    if search:
        if util.search(search):
            return redirect(f'/{search}')
        else:
            return redirect(f'/search/{search}')
    
    #render the index page
    return render(request, "encyclopedia/index.html", {
        "entries": util.list_entries()
    })

#display the wikipage for the entry
def wiki_page(request, entry_name):
    # check for search box
    search = request.GET.get("q")
    if search:
        if util.search(search):
            return redirect(f'/{search}')
        else:
            return redirect(f'/search/{search}')

    # if user tries to go into a page that doesnt exis display error page, else render the content
    title = None
    for entry in util.list_entries():
        if entry_name.lower() == entry.lower():
            title = entry 
    if not title:
        return render(request, "encyclopedia/does_not_exist.html", {
        "entry_name": entry_name,
    })
    return render(request, "encyclopedia/entry.html", {
        "entry_name": title,
        "entry": markdown2.markdown(util.get_entry(title))
    })

# display the edit page
def edit_page(request, entry_name):

    #check if the user submits changes
    if request.method == "POST":
        form = WikiPage(request.POST)
        if form.is_valid():
            save_page = form.cleaned_data["page"]
            util.save_entry(entry_name, save_page)
            return redirect(f'/{entry_name}')
        else:
            return render(request, "encyclopedia/edit.html", {
            "form": save_page,
            "entry_name": entry_name,
            "entry": util.get_entry(entry_name),
            })

    #check to see if the search bar was used to search
    search = request.GET.get("q")
    if search:
        if util.search(search):
            return redirect(f'/{search}')
        else:
            return redirect(f'/search/{search}')

    # display the page  
    title = None
    for entry in util.list_entries():
        if entry_name.lower() == entry.lower():
            title = entry 
    content = util.get_entry(title)
    return render(request, "encyclopedia/edit.html", {
        "entry_name": title,
        "entry": content,
        "form": WikiPage(initial={'page':content})
    })


# display the creation fo a new page
def new_page(request):

    # if user requests to save changes save as markdown
    if request.method == "POST":
        form = NewPage(request.POST)
        if form.is_valid():
            save_page = form.cleaned_data["page"]
            title = form.cleaned_data["title"]
            util.save_entry(title, save_page)
            return redirect(f'/{title}')
        else:
            return render(request, "encyclopedia/new_page.html", {
            "form": save_page,
            })


    return render(request, "encyclopedia/new_page.html", {
        "form": NewPage()
    })

# if the user search does not match an entry then check for substrings
def match_search(request, q):
    search = request.GET.get("q")
    if search:
        if util.search(search):
            return redirect(f'/{search}')
        else:
            return redirect(f'/search/{search}')

    # convert everything to lowercase for comparison in the html     
    q = q.lower()
    entries = util.list_entries()
    for i in range(len(entries)):
        entries[i] = entries[i].lower()

    return render(request, "encyclopedia/matching_search.html", {
        "entries": entries,
        "search": q
    })


def random(request):
    pages = util.list_entries()
    page = rd.choice(pages)
    return redirect(f'/{page}')
