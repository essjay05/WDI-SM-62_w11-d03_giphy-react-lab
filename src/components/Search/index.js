import React from 'react';

export default () => {
    return (
        <form>
            <div class="form-group">
                <input type="text" class="form-control" id="searchGiphy" aria-describedby="emailHelp" placeholder="Enter search term"/>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    )
}