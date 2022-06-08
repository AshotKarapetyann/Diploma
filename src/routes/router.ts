import  express  from "express";
import { shopController } from "../controllers/Shops";
import { typeController } from "../controllers/Types";
import { productController } from "../controllers/Products";
import { colorController } from "../controllers/Colors";
import { sizeController } from "../controllers/Sizes";
import totoro from "totoro-node";

const Router = express.Router();

Router.use("/", totoro.rain({
    v1:{
        endpoints:[
        {
            route: "/shop",
            method: "POST",
            implementation: function(apiversion, req, res){
                shopController.createNewShop(req, res);
            }
        },
        {
            route: "/shop",
            method: "GET",
            implementation: function(apiversion, req, res){
                shopController.getAllShops(req, res);
            }     
        },
        {
            route: "/shop/:id",
            method: "GET",
            implementation: function(apiversion, req, res){
                shopController.getShopByID(req, res);
            }
        },
        {
            route: "/shop/:id",
            method: "PATCH",
            implementation: function(apiversion, req, res){
                shopController.updateShop(req, res);
            }
        },
        {
            route: "/shop/:id",
            method: "DELETE",
            implementation: function(apiversion, req, res){
                shopController.deleteShop(req, res);
            }
        },
        {
            route: "/type",
            method: "POST",
            implementation: function(apiversion, req, res){
                typeController.createNewType(req, res);
            }
        },
        {
            route: "/type",
            method: "GET",
            implementation: function(apiversion, req, res){
                typeController.getAllTypes(req, res);
            }     
        },
        {
            route: "/type/:id",
            method: "GET",
            implementation: function(apiversion, req, res){
                typeController.getTypeByID(req, res);
            }
        },
        {
            route: "/type/:id",
            method: "PATCH",
            implementation: function(apiversion, req, res){
                typeController.updateType(req, res);
            }
        },
        {
            route: "/type/:id",
            method: "DELETE",
            implementation: function(apiversion, req, res){
                typeController.deleteType(req, res);
            }
        },
        {
            route: "/product",
            method: "POST",
            implementation: function(apiversion, req, res){
                productController.createNewProduct(req, res);
            }
        },
        {
            route: "/product",
            method: "GET",
            implementation: function(apiversion, req, res){
                productController.getAllProducts(req, res);
            }     
        },
        {
            route: "/product/:id",
            method: "GET",
            implementation: function(apiversion, req, res){
                productController.getProductByID(req, res);
            }
        },
        {
            route: "/product/:id",
            method: "PATCH",
            implementation: function(apiversion, req, res){
                productController.updateProduct(req, res);
            }
        },
        {
            route: "/product/:id",
            method: "DELETE",
            implementation: function(apiversion, req, res){
                productController.deleteProduct(req, res);
            }
        },
        {
            route: "/color",
            method: "POST",
            implementation: function(apiversion, req, res){
                colorController.createNewColor(req, res);
            }
        },
        {
            route: "/color",
            method: "GET",
            implementation: function(apiversion, req, res){
                colorController.getAllColors(req, res);
            }     
        },
        {
            route: "/color/:id",
            method: "GET",
            implementation: function(apiversion, req, res){
                colorController.getColorByID(req, res);
            }
        },
        {
            route: "/color/:id",
            method: "PATCH",
            implementation: function(apiversion, req, res){
                colorController.updateColor(req, res);
            }
        },
        {
            route: "/color/:id",
            method: "DELETE",
            implementation: function(apiversion, req, res){
                colorController.deleteColor(req, res);
            }
        }, 
        {
            route: "/size",
            method: "POST",
            implementation: function(apiversion, req, res){
                sizeController.createNewSize(req, res);
            }
        },
        {
            route: "/size",
            method: "GET",
            implementation: function(apiversion, req, res){
                sizeController.getAllSizes(req, res);
            }     
        },
        {
            route: "/size/:id",
            method: "GET",
            implementation: function(apiversion, req, res){
                sizeController.getSizeByID(req, res);
            }
        },
        {
            route: "/size/:id",
            method: "PATCH",
            implementation: function(apiversion, req, res){
                sizeController.updateSize(req, res);
            }
        },
        {
            route: "/size/:id",
            method: "DELETE",
            implementation: function(apiversion, req, res){
                sizeController.deleteSize(req, res);
            }
        }
        ]
    }
}));


export default Router;