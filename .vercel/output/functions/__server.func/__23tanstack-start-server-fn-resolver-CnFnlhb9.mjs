//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-CnFnlhb9.js
var manifest = {
	"0952badcfed43ea827490e266f3e43f74749baa0ce7fc0d4704f688a048804a0": {
		functionName: "chatWithGemini_createServerFn_handler",
		importer: () => import("./_ssr/chat-BnbyU0e3.mjs")
	},
	"1ac20e83585a55e943670fa4670b07889b610801a7a21f28dc367c19f92e50fd": {
		functionName: "submitContact_createServerFn_handler",
		importer: () => import("./_ssr/contact.functions-D4-FQyZZ.mjs")
	}
};
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ?? await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };
