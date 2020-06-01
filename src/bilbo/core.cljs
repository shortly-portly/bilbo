(ns bilbo.core
  (:require [reagent.core :as r]
            [reagent.dom :as reagent-dom]))

;; define your app data so that it doesn't get over-written on reload

(def app-state (r/atom {:text "Goodbye world!"
                        :notes [{:id 1 :creation-ts "Sun 31/05/20" :text "This is note 1"}
                                {:id 2 :creation-ts "Sat 30/05/20" :text "This is note 2"}]}))

;; (defn todo-input [{:keys [title on-save on-stop]}]
;;   (let [val (r/atom title)
;;         stop #(do (reset! val "")
;;                   (if on-stop (on-stop)))
;;         save #(let [v (-> @val str str/trim)]
;;                 (if-not (empty? v) (on-save v))
;;                 (stop))]
;;     (fn [{:keys [id class placeholder]}]
;;       [:input {:type "text" :value @val
;;                :id id :class class :placeholder placeholder
;;                :on-blur save
;;                :on-change #(reset! val (-> % .-target .-value))
;;                :on-key-down #(case (.-which %)
;;                                13 (save)
;;                                27 (stop)
;;                                nil)}])))

(defn note-component [{:keys [text creation-ts]}]
  (let [val (r/atom text)]
    (fn []
      [:div {:class "shadow p-3 mb-5 bg-white rounded"}
       [:div.form-group
        [:label creation-ts]
        [:textarea {:value @val
                    :class "form-control"
                    :on-change #(reset! val (-> % .-target .-value))}]
        ]])))

(defn container []
  [:div.container
   [:h1 (:text @app-state)]
   [:h4 "Edit this and see it change!"]

   (for [note (@app-state :notes)]
     [note-component note])])

(defn start []
  (reagent-dom/render [container]
                      (. js/document (getElementById "app"))))

(defn ^:export init []
  ;; init is called ONCE when the page loads
  ;; this is called in the index.html and must be exported
  ;; so it is available even in :advanced release builds
  (start))

(defn stop []
  ;; stop is called before any code is reloaded
  ;; this is controlled by :before-load in the config
  (js/console.log "stop"))
