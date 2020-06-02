(ns bilbo.core
  (:require [reagent.core :as r]
            [reagent.dom :as reagent-dom]
            [markdown-it :as markdown-it]))

;; define your app data so that it doesn't get over-written on reload

(def app-state (r/atom {:text "Goodbye world!"
                        :notes [{:id 1 :edit true :creation-ts "Sun 31/05/20" :text "This is note 1"}
                                {:id 2 :edit false :creation-ts "Sat 30/05/20" :text "This **is** note 2"}]}))

(defn edit-content [val]
  (fn []
    (let [row-count (count (re-seq #"\n" @val))]
      [:div.form-group
       [:textarea {:value @val
                   :rows (if (< row-count 5) 7 (+ row-count 2))
                   :class "form-control"
                   :on-change #(reset! val (-> % .-target .-value))}]])))

(defn show-content [val]
  (fn []
    (let [md (markdown-it.)]
      [:div {:dangerouslySetInnerHTML {:__html (. md render @val)}}])))

;; (defn todo-item []
;;   (let [editing (r/atom false)]
;;     (fn [{:keys [id done title]}]
;;       [:li {:class (str (if done "completed ")
;;                         (if @editing "editing"))}
;;        [:div.view
;;         [:input.toggle {:type "checkbox" :checked done
;;                         :on-change #(toggle id)}]
;;         [:label {:on-double-click #(reset! editing true)} title]
;;         [:button.destroy {:on-click #(delete id)}]]
;;        (when @editing
;;          [todo-edit {:class "edit" :title title
;;                      :on-save #(save id %)
;;                      :on-stop #(reset! editing false)}])])))

(defn note-component [{:keys [text creation-ts edit]}]
  (let [val     (r/atom text)
        editing (r/atom edit)]
    (fn []
      [:div {:class "shadow p-3 mb-5 bg-white rounded"
             :on-double-click #(reset! editing (not @editing))}
       [:div.form-group
        [:label creation-ts]
        (if @editing
          [edit-content val]
          [show-content val])]])))

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
