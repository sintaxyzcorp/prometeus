/* ------------------------ LOAD ------------------------ */

$(document).ready(function () {

    $grupos = $('#id_groups')

    $grupos.multiSelect({
        selectableHeader: "<div class='own-select-header'>Disponibles</div>",
        selectionHeader: "<div class='own-select-header'>Asignados</div>",
    })

})
