// Widgets init
(function () {
    Datepicker.init();
    Navigation.init();
    Validator.init();
    Alerts.init();
    Header.init();
    Lookup.init();
    Grid.init();
    Tree.init();
})();

// Read only binding
(function () {
    [].forEach.call(document.querySelectorAll('.widget-box.readonly'), function (widget) {
        [].forEach.call(widget.querySelectorAll('.mvc-lookup'), function (element) {
            return new MvcLookup(element, { readonly: true });
        });

        [].forEach.call(widget.querySelectorAll('.mvc-tree'), function (element) {
            return new MvcTree(element, { readonly: true });
        });

        [].forEach.call(widget.querySelectorAll('textarea'), function (textarea) {
            textarea.readOnly = true;
            textarea.tabIndex = -1;
        });

        [].forEach.call(widget.querySelectorAll('input'), function (input) {
            input.readOnly = true;
            input.tabIndex = -1;
        });
    });

    window.addEventListener('click', function (e) {
        if (e.target && e.target.readOnly) {
            e.preventDefault();
        }
    });
})();

// Input focus binding
(function () {
    var invalidInput = document.querySelector('.input-validation-error[type=text]:not([readonly]):not(.datepicker):not(.datetimepicker)');

    if (invalidInput) {
        invalidInput.setSelectionRange(0, invalidInput.value.length);
        invalidInput.focus();
    } else {
        var input = document.querySelector('input[type=text]:not([readonly]):not(.datepicker):not(.datetimepicker)');

        if (input) {
            input.setSelectionRange(0, input.value.length);
            input.focus();
        }
    }
})();
