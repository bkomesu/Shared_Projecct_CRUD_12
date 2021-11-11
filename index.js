class {
    constructor() {
        this. =;
        this. = [];
    }

    add( ,) {
        this. .push(new ( , ));
    }
}

class {
    constructor( , ) {
        this. = ;
        this. = ;
    }
}

class {
    static url = '';

    static get() {
        return $.get(this.url);
    }

    static get(id) {
        return $.get(this.url + `/${id}`);
    }

    static create() {
        return $.post(this.url, );

    }

    static update() {
        return $.ajax({
            url: this.url + `/${._id}`,
            dataType: 'json',
            data: JSON.stringify(),
            contentType: 'application/json',
            type: 'PUT'
    });
}

    static delete(id) {
        return $.ajax({
            url: this.url + `/${id}`,
            type: 'DELETE' 
        });
    }
}

class DOMManager {
    static ;

    static getAll() {
        .getAll().then(  => this.render());
    }

    static render() {
        this. =  ;
        $('#app').empty();
        for (let of ) {
            $('#app').prepend(
                `<div id="${ ._id}" class="card">
                <div class="card-header">
                <h2>${ .}</h2>           
                <button class="btn btn-danger" onclick="DOMManager.delete ('${._id}')">Delete</button>           
                </div>
                <div class="card-body">
                    <div class="card">
                        <div class="row">
                            <div class="col-sm">
                                <input type="text" id="${ ._id}-  -  " class ="form-control" placeholder-" ">
                </div>
                    <div class="col-sm">
                        <input type="text" id="${ ._id}-  -  " class ="form-control" placeholder-" ">
                </div>
                </div>
                <button id="${ ._id}-   - " onclick="DOMManager.add ('${ ._id}')" class="btn btn-primary form-control">Add</button>

                </div>
                </div>
                </div><br>`
              );
              for (let  of .  ) {
                  $(`#${  ._id}`).find('.card-body').append(
                    `<p>
                    <span id="  -${ ._id}"><strong> : </stong> ${ . }</span>
                    <span id="  -${ ._id}"><strong> : </stong> ${ . }</span>
                    <button class="btn btn-danger" onclick="DOMManager.delete ('${ ._id}', '${ ._id}')">Delete </button>`                  `
                  )
              }
        }
    }
}

DOMManager.getAll();
