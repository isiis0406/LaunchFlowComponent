({
    init: function (component) {
        // Find the component whose aura:id is "flowData"
        var flow = component.find("flowData");
        // In that component, start your flow. Reference the flow’s Unique Name.
        flow.startFlow("Button_d_ajout_d_un_compte_et_d_un_contact_via_Pappers");
    },
    handleFlowStatusChange : function (component, event, helper) {
        // Vérifiez si le flux est terminé et fermez l'action rapide
        if(event.getParam('status') === "FINISHED") {
            // Ferme l'action rapide
            $A.get("e.force:closeQuickAction").fire();
        }
    }
})
